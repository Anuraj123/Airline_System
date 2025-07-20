const { FlightRepository } = require("../repositories/index");
const { AirportRepository } = require("../repositories/index");
const { CityRepository } = require("../repositories/index");
const { AirlineRepository } = require("../repositories/index");
const { ServiceError } = require("../utils/Errors/index");

const { Recommand } = require("../utils/utils");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airportRepository = new AirportRepository();
    this.cityRepository = new CityRepository();
    this.airlineRepository = new AirlineRepository();
  }

  async searchDeparture(data) {
    try {
      const payload = {};
      const departureRecommand = [];
      payload.departurebyCity = await this.cityRepository.getfromCity(
        data.departure
      );

      payload.departurebyAirport = await this.airportRepository.getfromAirport(
        data.departure
      );

      let datas = Recommand(
        payload.departurebyCity,
        payload.departurebyAirport
      );
      departureRecommand.push(datas);

      return departureRecommand;
    } catch (error) {
      throw new ServiceError();
    }
  }
  async searchArrival(data) {
    try {
      const payload = {};
      const departureRecommand = [];

      payload.arrivalbyCity = await this.cityRepository.getfromCity(
        data.arrival
      );
      payload.arrivalbyAirport = await this.airportRepository.getfromAirport(
        data.arrival
      );
      let datas = Recommand(payload.arrivalbyCity, payload.arrivalbyAirport);
      departureRecommand.push(datas);

      return departureRecommand;
    } catch (error) {
      throw new ServiceError();
    }
  }
  async createFlight(data) {
    try {
      const {
        departureCityId,
        departureCity,
        departureAirport,
        departureAirportId,
        arrivalCityId,
        arrivalCity,
        arrivalAirportId,
        arrivalAirport,
      } = data;

      const airport = await this.airportRepository.get(departureAirportId);
      let airlineIds = airport[0].airLineIds.split(";");
      let array = [];

      for (let i = 0; i < airlineIds.length; i++) {
        const data = await this.airlineRepository.getbyrefId(
          airlineIds[i],
          departureCity,
          arrivalCity
        );
        console.log(data);
        const obj = {};
        data[0]?.referanceId && (obj.referanceId = data[0]?.referanceId);
        data[0]?.PNR && (obj.PNR = data[0]?.PNR);
        data[0]?.capacity && (obj.capacity = data[0]?.capacity);
        data[0]?.planeName && (obj.planeName = data[0]?.planeName);
        data[0]?.From && (obj.From = data[0]?.From);
        data[0]?.To && (obj.To = data[0]?.To);
        data[0]?.TravelTime && (obj.TravelTime = data[0]?.TravelTime);
        data[0]?.AvailableSeats &&
          (obj.AvailableSeats = data[0]?.AvailableSeats);
        data[0]?.BookedSeats && (obj.BookedSeats = data[0]?.BookedSeats);

        if (Object.keys(obj).length != 0) {
          obj.departureCityId = departureCityId;
          obj.departureCity = departureCity;
          obj.departureAirport = departureAirport;
          obj.departureAirportId = departureAirportId;
          obj.arrivalCityId = arrivalCityId;
          obj.arrivalCity = arrivalCity;
          obj.arrivalAirportId = arrivalAirportId;
          obj.arrivalAirport = arrivalAirport;
          array.push(obj);
        }
      }
console.log(array);
      return array;
    } catch (error) {
      throw new ServiceError();
    }
  }
}
module.exports = FlightService;
