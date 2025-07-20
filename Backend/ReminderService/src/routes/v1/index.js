const express = require("express");
const router = express.Router();

const ticketController = require("../../controllers/emailTicketController");
router.post(
  "/createTicket",
  ticketController.createTicket
);
router.put("/updateTicket",ticketController.updateTicket)
module.exports = router;
