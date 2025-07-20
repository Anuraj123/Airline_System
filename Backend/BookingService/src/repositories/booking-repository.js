const { Bookings } = require("../models/index");
const { ValidationError, AppError } = require("../utils/Errors/index");
const { Op } = require("sequelize");
class BookingRepository {
  async createBooking(
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
  ) {

    try {
      const data = await Bookings.create({
        email: email,
        userName:userName,
        firstName: firstName,
        lastName: lastName,
        bookedSeats: bookedSeats,
        totalPrice: totalPrice,
        fromCity: fromCity,
        toCity: toCity,
        departureAirport: departureAirport,
        arrivalAirport: arrivalAirport,
        PNR: PNR,
        dateAndTimeOfTravel: "2024-06-29 13:55:00",
      });

      return data;
    } catch (error) {

      console.log(error);
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Booking",
      "There was some  issue creating the booking, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  async deleteBooking({ email, firstName, lastName, PNR }) {
    try {
      const response = await Bookings.destroy({
        where: {
          [Op.and]: [
            { email: email },
            { firstName: firstName },
            { lastName: lastName },
            { PNR: PNR },
          ],
        },
      });
      return response;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Booking",
      "There was some  issue creating the booking, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  async getBooking(email, PNR) {
    try {
      const response = await Bookings.findOne({
        where: {
          [Op.and]: [{ PNR: PNR }, { email: email }],
        },
      });
      return response;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Booking",
      "There was some  issue creating the booking, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
  async updateBooking({ email, PNR, dateAndTimeOfTravel }) {
    try {
      const response = await Bookings.update({
        dateAndTimeOfTravel: dateAndTimeOfTravel,
        where: {
          [Op.and]: [{ PNR: PNR }, { email: email }],
        },
      });
    } catch (error) {}
  }
}

module.exports = BookingRepository;
