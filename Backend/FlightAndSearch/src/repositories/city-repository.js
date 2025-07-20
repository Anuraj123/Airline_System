const { City, Airport } = require("../models/index");
const { Op } = require("sequelize");
const {ValidationError,AppError}=require('../utils/Errors/index')
class CityRepository {
  async create(cityName) {
    try {
      const city = await City.create({
        name: cityName,
      });
      return city;
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
  async get(cityId) {
    try {
      const city = await City.find({
        where: {
          cityId: cityId,
        },
      });
      return city;
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
  async getByCity(cityName) {
    try {
      const city = await City.findAll({
        where: {
          name: cityName,
        },
      });
      return city;
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
  async getfromCity(cityName) {
    //we are doing innner join
    try {
      const city = await City.findAll({
        where: {
          name: {
            [Op.startsWith]: `%${cityName}`,
          },
        },
        include: [
          {
            model: Airport,
            required: true,

            attibutes: ["cityId"],
          },
        ],
      });
      return city;
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
  async update(cityName, cityId) {
    try {
      const city = await City.update(
        {
          name: cityName,
        },
        {
          cityId: cityId,
        }
      );
      return city;
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
  async delete(cityId) {
    try {
      const city = await City.delete({
        where: {
          cityId: cityId,
        },
      });
      return city;
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

module.exports = CityRepository;

//it print return table data  .then(data=>{console.log(dataF)})
