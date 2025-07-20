const { EmailTicketRepository } = require("../repositories/index");
const { EmailFormat } = require("../utils/emailFormat");
const Utils = require("../utils/utils");
const cron = require("node-cron");
const schedule = require("node-schedule");
class EmailTicketService {
  constructor(data) {
    this.emailTicketRepository = new EmailTicketRepository();
    this.utils = new Utils();
    this.emailFormat = new EmailFormat();
  }
  async createTicket(data) {
    try {
      const { email, PNR } = data;
      const bookingData = await this.utils.getBooking(email, PNR);
      const {
        userName,
        dateAndTimeOfTravel,
        fromCity,
        toCity,
        departureAirport,
        arrivalAirport,
        firstName,
        lastName,
      } = bookingData;
      console.log(bookingData.firstName);
      const response = await this.emailTicketRepository.createTicket(
        email,
        new Date(dateAndTimeOfTravel),
        fromCity,
        toCity,
        departureAirport,
        arrivalAirport,
        JSON.stringify(firstName),
        JSON.stringify(lastName),
        PNR
      );
      const dateAndTime = this.utils.setDateandTime(dateAndTimeOfTravel);
      this.emailFormat.bookedTicketEmail(
        userName,
        email,
        dateAndTime,
        fromCity,
        toCity,
        departureAirport,
        arrivalAirport,
        firstName,
        lastName,
        PNR
      );
      const schedulerDate =
        this.utils.setDateandTimeforScheduler(dateAndTimeOfTravel);
      schedule.scheduleJob(email, schedulerDate, () => {
        this.emailFormat.bookedNotificationEmail(
          email,
          dateAndTime,
          fromCity,
          toCity,
          departureAirport,
          arrivalAirport,
          firstName,
          lastName,
          PNR
        );
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async updateTicket(data) {
    try {
      const { email, PNR } = data;
      const bookingData = await Utils.apiCall(email, PNR);
      const response = await this.emailTicketRepository.updateTicket(
        email,
        dateAndTimeOfTravel
      );
      this.emailFormat.bookingUpdatedEmail(
        email,
        bookingData.dateAndTimeOfTravel,
        bookingData.fromCity,
        bookingData.toCity,
        bookingData.departure,
        bookingData.arrival,
        bookingData.firstName,
        bookingData.lastName,
        PNR
      );
      schedule.scheduledJobs[email].cancel();
      schedule.scheduleJob(email, "* * * * *", () => {
        this.emailFormat.bookedNotificationEmail(
          email,
          bookingData.dateAndTimeOfTravel,
          bookingData.fromCity,
          bookingData.toCity,
          bookingData.departure,
          bookingData.arrival,
          bookingData.firstName,
          bookingData.lastName,
          PNR
        );
      });
      return response;
    } catch (error) {}
  }
  async cancelTicket(data) {
    try {
      const { email, PNR } = data;
      const bookingData = await Utils.apiCall(email, PNR);
      this.emailFormat.bookingCancelledEmail(
        email,
        bookingData.dateAndTimeOfTravel,
        bookingData.fromCity,
        bookingData.toCity,
        bookingData.departure,
        bookingData.arrival,
        bookingData.firstName,
        bookingData.lastName,
        PNR
      );
      const response = await this.emailTicketRepository.destroyTicket(email);
      schedule.scheduledJobs[email].cancel();
      return response;
    } catch (error) {}
  }
}

module.exports = EmailTicketService;
