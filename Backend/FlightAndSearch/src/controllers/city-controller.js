const { CityService } = require("../services/index");

const cityService = new CityService();
const create = async (req, res) => {
  try {

    const city = await cityService.createCity(req.body.name);
    return res.status(201).json({
      data: city,
      status: true,
      message: "Succesfully created city",
      err: {},
    });
  } catch (error) {

    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to create city",
      err: error.explanation,
    });
  }
};
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.body);
    return res.status(201).json({
      data: city,
      status: true,
      message: "Succesfully got the city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to get city",
      err: error.explanation,
    });
  }
};
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.body);
    return res.status(201).json({
      data: city,
      status: true,
      message: "Succesfully updated city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to update city",
      err: error.explanation,
    });
  }
};
const remove = async (req, res) => {
  try {
    const city = await cityService.deleteCity(req.body);
    return res.status(201).json({
      data: city,
      status: true,
      message: "Succesfully removed city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to remove city",
      err: error.explanation,
    });
  }
};

module.exports = {
  create,
  get,
  remove,
  update,
};
