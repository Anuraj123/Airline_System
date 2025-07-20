const { AirlineRepository } = require("../repositories/index");
const { ServiceError } = require("../utils/Errors/index");

class CityService {
  constructor() {
    this.airlineRepository = new AirlineRepository();
  }
  async createAirline(data) {
    try {
      const airline = await this.airlineRepository.create(
        data.name,
        data.capacity,
        data.PNR,
        data.fromCity,
        data.toCity,
        data.referenceId,
        data.time
      );

      return airline;
    } catch (error) {
      throw new ServiceError();
    }
  }
  async deleteAirline(data) {
    try {
      const airline = await this.airlineRepository.delete(data.PNR);

      return airline;
    } catch (error) {
      throw new ServiceError();
    }
  }
  async getByPK(data) {
    try {
      const airline = await this.airlineRepository.getbyPK(data);
      return airline;
    } catch (error) {}
  }
  async getByrefId(data) {
    try {
      const airline = await this.airlineRepository.getbyrefId(data.refId);

      return airline;
    } catch (error) {
      throw new ServiceError();
    }
  }
  async updateAirline(data) {
    try {
      const { From, To, PNR, capacity, time } = data;
      const airline = await this.airlineRepository.update(
        From,
        To,
        PNR,
        capacity,
        time
      );

      return airline;
    } catch (error) {
      throw new ServiceError();
    }
  }
}

module.exports = CityService;
