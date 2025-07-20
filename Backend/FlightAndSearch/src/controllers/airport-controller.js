const { AirportService } = require("../services/index");

const airportService = new AirportService();
const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      message: "Created airport succesfully",
      status: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "unable to create airport ",
      status: true,
      err: error.explanation,
    });
  }
};
const update = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.body);
    return res.status(201).json({
      data: airport,
      message: " succesfully updated the airport",
      status: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "unable to update airport ",
      status: true,
      err: error.explanation,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(201).json({
      data: airport,
      message: "succesfully got the airport",
      status: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "unable to get the airport ",
      status: true,
      err: error.explanation,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airport = await airportService.getAllAirport();
    return res.status(201).json({
      data: airport,
      message: "succesfully got the airport",
      status: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "unable to get the airport ",
      status: true,
      err: error.explanation,
    });
  }
};

const remove = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.body);
    return res.status(201).json({
      data: airport,
      message: "succesfully removed airport",
      status: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "unable to remove airport ",
      status: true,
      err: error.explanation,
    });
  }
};
module.exports = {
  create,
  update,
  get,
  getAll,
  remove,
};
