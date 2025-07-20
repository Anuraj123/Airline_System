const { Airlines } = require("../models/index");
const { Op } = require("sequelize");
const { ValidationError, AppError } = require("../utils/Errors/index");

class AirlineRepository {
  async create(planeName, capacity, PNR, fromCity, toCity, referenceId, time) {
    try {
      const airline = await Airlines.create({
        planeName: planeName,
        capacity: capacity,
        BookedSeats: 0,
        AvailableSeats: capacity,
        From: fromCity,
        To: toCity,
        PNR: PNR,
        referanceId: referenceId,
        TravelTime: time,
      });
      return airline;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airline",
      "There was some  issue creating the Airline, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
  async getbyPK(PNR) {
    try {
      const airline = await Airlines.findAll({
        where: {
          PNR: PNR,
        },
      });
      return airline;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airline",
      "There was some  issue creating the Airline, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  async getbyrefId(referanceId, departureCity, arrivalCity) {
    try {

      const airline = await Airlines.findAll({
        where: {
          [Op.and]: [
            { referanceId: referanceId },
            { From: departureCity },
            { To: arrivalCity },
          ],
        },
      });
      console.log(airline);
      return airline;
    } catch (error) {
      console.log(error);
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airline",
      "There was some  issue creating the Airline, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  async update(
    cityFrom = null,
    cityTo = null,
    PNR,
    capacity = null,
    time = null
  ) {
    try {
      const payload = {};
      if (cityFrom != null) {
        payload.From = cityFrom;
      }
      if (cityTo != null) {
        payload.To = cityTo;
      }
      if (capacity != null) {
        payload.capacity = capacity;
      }
      if (time != null) {
        payload.TravelTime = time;
      }

      const airline = await Airlines.update(payload, {
        where: {
          PNR: PNR,
        },
      });
      return airline;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airline",
      "There was some  issue creating the Airline, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  async delete(PNR) {
    try {
      const airline = await Airlines.delete({
        where: {
          PNR: PNR,
        },
      });
      return airline;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airline",
      "There was some  issue creating the Airline, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = AirlineRepository;
