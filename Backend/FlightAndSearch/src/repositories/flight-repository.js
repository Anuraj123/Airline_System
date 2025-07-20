const { Flight } = require("../models/index");
const { ValidationError, AppError } = require("../utils/Errors/index");
class FlightRepository {
  async create({ PNR, departureId, arrivalId, time, price, seats }) {
    try {
      const flight = await Flight.create({
        flightPNR: PNR,
        departureAirportId: departureId,
        arrivalAirportId: arrivalId,
        arrivalTime: time,
        price: price,
        totalSeats: seats,
      });
      return flight;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create City",
      "There was some  issue creating the City, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
  async get(flightName, flightId) {
    try {
      const flight = await Flight.find({
        where: {
          flightId: flightId,
        },
      });
      return flight;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create City",
      "There was some  issue creating the City, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
  async update(flightName, flightId) {
    try {
      const flight = await Flight.update(
        {
          name: flightName,
        },
        {
          flightId: flightId,
        }
      );
      return flight;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create City",
      "There was some  issue creating the City, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
  async delete(flightId) {
    try {
      const flight = await Flight.delete({
        where: {
          flightId: flightId,
        },
      });
      return flight;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create City",
      "There was some  issue creating the City, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = FlightRepository;
