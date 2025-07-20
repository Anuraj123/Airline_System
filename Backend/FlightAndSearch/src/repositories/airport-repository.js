const { Airport, City } = require("../models/index");
const { Op } = require("sequelize");
const {ValidationError,AppError}=require('../utils/Errors/index')
class AirportRepository {
  async create(airportName, cityId, airLineIDs) {
    try {
      const airport = await Airport.create({
        name: airportName,
        cityId: cityId,
        airLineIds: airLineIDs,
      });
      return airport;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airport",
      "There was some  issue creating the Airport, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  async get(airportId) {
    try {
      const airport = await Airport.findAll({
        where: {
          airportId: airportId,
        },
      });
      return airport;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airport",
      "There was some  issue creating the Airport, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  async getAll() {
    try {
      const airport = await Airport.findAll();
      return airport;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airport",
      "There was some  issue creating the Airport, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
  async getfromAirport(airportName) {
    //we are doing innner join
    try {
      const airport = await Airport.findAll({
        where: {
          name: {
            [Op.startsWith]: `%${airportName}`,
          },
        },
        include: [
          {
            model: City,
            required: true,

            attibutes: ["cityId"],
          },
        ],
      });
      return airport;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airport",
      "There was some  issue creating the Airport, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  async update(airportName, airLineIDs) {
    try {
      const airportname = await Airport.findOne({
        where: {
          name: airportName,
        },
      });
      const array =
        airportname != null
          ? airportname.airLineIds + ";" + airLineIDs
          : airLineIDs;
      const airport = await Airport.update(
        {
          airLineIds: array,
        },
        {
          where: {
            name: airportName,
          },
        }
      );
      return airport;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airport",
      "There was some  issue creating the Airport, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  async delete(airportId) {
    try {
      const airport = await Airport.delete({
        where: {
          airportId: airportId,
        },
      });
      return airport;
    } catch (error) {
      if ((error = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
    }
    throw new AppError(
      "RepositoryError",
      "Cannot create Airport",
      "There was some  issue creating the Airport, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = AirportRepository;
