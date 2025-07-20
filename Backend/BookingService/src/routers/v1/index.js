const express = require("express");
const router = express.Router();

const bookingController = require("../../controllers/booking-controller");
const bookingMiddlewares = require("../../Middlewares/booking-middleware");
router.post(
  "/createBooking",
  // bookingMiddlewares.checkLogin,
  // bookingMiddlewares.validateUser,
  bookingController.create
);
router.get("/getBooking",bookingController.get)
module.exports = router;
