const { UserRepository } = require("../repositories/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_KEY = "auth";
const { ServiceError } = require("../utils/Errors/index");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async createUser(data) {
    try {
      const { email, password, phNo, firstName, lastName, userName } = data;
      const response = await this.userRepository.createUser(
        email,
        password,
        phNo,
        firstName,
        lastName,
        userName
      );
      return response;
    } catch (error) {
      console.log(error);
      throw new ServiceError();
    }
  }
  async SignIn(data) {
    try {
      const { email, password } = data;

      const response = await this.userRepository.getUser(email);

      const passwordMatch = await this.comparePassword(
        password,
        response.password
      );

      if (!passwordMatch) {
        throw { error: "Invalid Password" };
      }
      const token = this.createToken({
        email: response.email,
        id: response.id,
      });
      return token;
    } catch (error) {
      throw new ServiceError();
    }
  }
  async isAuthenticated(token) {
    try {
      const userDetails = this.isVerified(token);

      if (!userDetails) {
        throw { error: "Invalid token" };
      }
      const response = await this.userRepository.getUser(userDetails.email);
      if (response.email != userDetails.email) {
        throw { error: "User with this token dosen't exist" };
      }
      return response;
    } catch (error) {
      throw new ServiceError();
    }
  }
  async getUser(data) {
    try {
      const response = await this.userRepository.getUser(data.email);
      return response;
    } catch (error) {
      throw new ServiceError();
    }
  }
  createToken(user) {
    try {
      const token = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return token;
    } catch (error) {
      throw new ServiceError();
    }
  }
  comparePassword(userInputPassword, encryptedPassword) {
    try {
      const res = bcrypt.compare(userInputPassword, encryptedPassword);
      return res;
    } catch (error) {
      throw new ServiceError();
    }
  }
  isVerified(token) {
    try {
      const res = jwt.verify(token, JWT_KEY);
      return res;
    } catch (error) {
      throw new ServiceError();
    }
  }
}

module.exports = UserService;
