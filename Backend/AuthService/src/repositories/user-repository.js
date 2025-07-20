const { User } = require("../models/index");
const { ValidationError, AppError } = require("../utils/Errors/index");
class UserRepository {
  async createUser(email, password, phNo,firstName,lastName,userName) {
    try {
      const user = await User.create({
        email: email,
        password: password,
        phNo: phNo,
        firstName:firstName,
        lastName:lastName,
        userName:userName
      });
      return user;
    } catch (error) {
      console.log(error)
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
  async getUser(email) {
    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      return user;
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
  async deleteUser(email) {
    try {
      const user = await User.destroy({
        where: {
          email: email,
        },
      });
      return user;
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

module.exports = UserRepository;
