const { BookingRepository } = require("../repositories/index");
const axios = require("axios");
const { ServiceError } = require("../utils/Errors/index");
class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }
  async createBooking(data) {
    try {
      const {
        email,
        userName,
        PNR,
        firstName,
        lastName,
        bookedSeats,
        totalPrice,
        fromCity,
        toCity,
        departureAirport,
        arrivalAirport,
        dateAndTimeOfTravel,
      } = data;

console.log(data);
      const booking = await this.bookingRepository.createBooking(
        email,
        userName,
        firstName,
        lastName,
        bookedSeats,
        totalPrice,
        fromCity,
        toCity,
        departureAirport,
        arrivalAirport,
        PNR,
        dateAndTimeOfTravel
      );

     await axios.post(`http://localhost:3004/api/v1/createTicket`, {
        email: email,
        PNR: PNR,
      });

      return booking;
    } catch (error) {

      throw new ServiceError();
    }
  }
  async getBooking(data) {
    try {
      const { email, PNR } = data;
      const booking = await this.bookingRepository.getBooking(email, PNR);
      return booking;
    } catch (error) {

      throw new ServiceError();
    }
  }
  async deleteBooking(data) {
    try {
      const { email, PNR } = data;
      const booking = await this.bookingRepository.getBooking(
        data.email,
        email.PNR
      );

      await axios.delete(`http://localhost:3004/api/v1/deleteTicket`, {
        email: email,
        PNR: PNR,
      });
      await this.bookingRepository.deleteBooking(
        email,
        firstName,
        lastName,
        PNR
      );
      return booking;
    } catch (error) {
      throw new ServiceError();
    }
  }
  async updateBooking(data) {
    try {
      const { email, PNR, dateAndTimeOfTravel } = data;
      const booking = await this.bookingRepository.updateBooking(
        email,
        PNR,
        dateAndTimeOfTravel
      );
      await axios.post(`http://localhost:3004/api/v1/updateTicket`, {
        email: email,
        PNR: PNR,
      });

      return booking;
    } catch (error) {
      throw new ServiceError();
    }
  }
}

module.exports = BookingService;
