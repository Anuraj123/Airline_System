const { FlightService } = require("../services/index");

const flightService = new FlightService();
const searchDeparture = async (req, res) => {
  try {
    const flight = await flightService.searchDeparture(req.query);
    return res.status(201).json({
      data: flight,
      status: true,
      message: "successfully got the departure details",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to get departure details",
      error: error.explanation,
    });
  }
};
const searchArrival = async (req, res) => {
  try {
    const flight = await flightService.searchArrival(req.query);
    return res.status(201).json({
      data: flight,
      status: true,
      message: "successfully got the arrival details",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to get arrival details",
      error: error.explanation,
    });
  }
};
const createFlight = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.query);
    return res.status(201).json({
      data: flight,
      status: true,
      message: "flight found succesfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to find data",
      error: error.explanation,
    });
  }
};

module.exports = {
  searchDeparture,
  searchArrival,
  createFlight,
};
