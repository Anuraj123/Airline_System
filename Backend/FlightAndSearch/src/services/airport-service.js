const {AirportRepository}=require('../repositories/index');
const { ServiceError } = require("../utils/Errors/index");

class AirportService {
constructor(){

    this.airportRepository=new AirportRepository();
}

  async createAirport(data) {
    try {
      const airport = await this.airportRepository.create(data.name,data.cityid,data.airLineIDs);
      return airport;
    } catch (error) {
      throw new ServiceError();

    }
  }
  async updateAirport(data) {
    try {
      const airport = await this.airportRepository.update(data.name,data.airLineIDs);
      return airport;
    } catch (error) {
      throw new ServiceError();

    }
  }
  async getAirport(airportId) {
    try {

      const airport = await this.airportRepository.get(airportId);
      return airport;
    } catch (error) {
      throw new ServiceError();

    }
  }
  async getAllAirport() {
    try {
      const airport = await this.airportRepository.getAll();
      return airport;
    } catch (error) {
      throw new ServiceError();

    }
  }
  async deleteAirport(data) {
    try {
      const airport = await this.airportRepository.delete(data.name);
      return airport;
    } catch (error) {
      throw new ServiceError();

    }
  }
}


module.exports=AirportService;