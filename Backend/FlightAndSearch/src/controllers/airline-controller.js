const { AirlineService } = require("../services/index");

const airlineService = new AirlineService();

const create = async (req, res) => {
  try {
    const airline = await airlineService.createAirline(req.body);
    res.status(201).json({
      data: airline,
      status: true,
      message: "Succesfully created airline",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      status: false,
      message: "unable to create airline",
      error: error.explanation,
    });
  }
};
const update = async (req, res) => {
  try {
    const airline = await airlineService.updateAirline(req.body);
    res.status(201).json({
      data: airline,
      status: true,
      message: "Succesfully got airline",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      status: false,
      message: "unable to get airline",
      error: error.explanation,
    });
  }
};
const getByPK = async (req, res) => {
  try {
    const airline = await airlineService.getByPK(req.params.pnr);
    res.status(201).json({
      data: airline,
      status: true,
      message: "Succesfully got the airline",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      status: false,
      message: "unable to get airline",
      error: error.explanation,
    });
  }
};
const getByRefId = async (req, res) => {
  try {
    const airline = await airlineService.getByrefId(req.params.id);
    res.status(201).json({
      data: airline,
      status: true,
      message: "Succesfully updated airline",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      status: false,
      message: "unable to update airline",
      error: error.explanation,
    });
  }
};
const remove = async (req, res) => {
  try {
    const airline = await airlineService.deleteAirline(req.params.id);
    res.status(201).json({
      data: airline,
      status: true,
      message: "Succesfully deleted airline",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      status: false,
      message: "unable to delete airline",
      error: error.explanation,
    });
  }
};

module.exports = {
  create,
  update,
  getByRefId,
  getByPK,
  remove,
};
