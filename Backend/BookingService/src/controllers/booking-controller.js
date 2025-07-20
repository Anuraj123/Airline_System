const { BookingService } = require("../services/index");

const bookingService = new BookingService();
const create = async (req, res) => {
  try {

    const booking = await bookingService.createBooking(req.body.data);

    return res.status(201).json({
      data: booking,
      status: true,
      message: "created booking succesfully",
      error: {},
      
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to create booking",
      error: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const booking = await bookingService.getBooking(req.body);

    return res.status(201).json({
      data: booking,
      status: true,
      message: "got booking succesfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to get booking",
      error: error.explanation,
    });
  }
};
const update = async (req, res) => {
  try {
    const booking = await bookingService.updateBooking(req.body);

    return res.status(201).json({
      data: booking,
      status: true,
      message: "updated booking succesfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to update booking",
      error: error.explanation,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const booking = await bookingService.deleteBooking(req.body);

    return res.status(201).json({
      data: booking,
      status: true,
      message: "deleted booking succesfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to delete booking",
      error: error.explanation,
    });
  }
};

module.exports = {
  create,
  get,
  update,
  destroy,
};
