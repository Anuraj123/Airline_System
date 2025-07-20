const { CityRepository } = require("../repositories/index");
const { ServiceError } = require("../utils/Errors/index");

class CityService {
  constructor() {
    this.cityRepository =new CityRepository();
  }
  async createCity(data) {

    try {
      const city = await this.cityRepository.create(data);

      return city;
    } catch (error) {
   throw new ServiceError();

    }
  }
  async deleteCity(data) {
    try {
      const city = await this.cityRepository.delete(data);

      return city;
    } catch (error) {
   throw new ServiceError();

    }
  }
  async getCity(data) {
    try {
      const city = await this.cityRepository.get(data);

      return city;
    } catch (error) {
   throw new ServiceError();

    }
  }
  async updateCity(data) {
    try {
      const city = await this.cityRepository.update(data);

      return city;
    } catch (error) {
   throw new ServiceError();

    }
  }
}


module.exports=CityService;