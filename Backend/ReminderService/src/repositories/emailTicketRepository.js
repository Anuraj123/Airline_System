const { EmailTicket } = require("../models/index");

class EmailTicketRepository {
  async createTicket(
    email,
    dateAndTimeOfTravel,
      fromCity,
      toCity,
      departure,
      arrival,
      firstName,
      lastName,
        PNR
  ) {
    try {
      const response = await EmailTicket.create({

        email:email,
        dateAndTimeOfTravel:dateAndTimeOfTravel,
        fromCity:fromCity,
        toCity:toCity,
        departure:departure,
        arrival:arrival,
        firstName:firstName,
        lastName:lastName,
        PNR:PNR
      }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getTicket(email) {
    try {
      const response = await EmailTicket.findOne({
        where: {
          email: email,
        },
      });
      return response;
    } catch (error) {}
  }

  async destroyTicket(email) {
    try {
      const response = await EmailTicket.destroy({
        where: {
          email: email,
        },
      });
      return response;
    } catch (error) {}
  }
  async updateTicket(email, dateAndTimeOfTravel) {
    try {
      const response = await EmailTicket.update({
        dateAndTimeOfTravel: dateAndTimeOfTravel,
        where: {
          email: email,
        },
      });
      return response;
    } catch (error) {}
  }
}

module.exports = EmailTicketRepository;
