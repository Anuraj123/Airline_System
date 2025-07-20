const { EmailTicketService } = require("../services/index");

const emailTicketService = new EmailTicketService();
const createTicket = async (req, res) => {
  try {
    const response = await emailTicketService.createTicket(req.body);
    return res.status(201).json({
      data: response,
      status: true,
      messsage: "Successfully created ticket",
      error: {},
    });
  } catch (error) {
    return res.status(201).json({
      data: {},
      status: false,
      messsage: "Unable to create ticket",
      error: error,
    });
  }
};
const updateTicket = async (req, res) => {
  try {
    const response = await emailTicketService.updateTicket(req.body);
    return res.status(201).json({
      data: response,
      status: true,
      messsage: "Successfully updated ticket",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      messsage: "Unable to update ticket",
      error: error,
    });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const response = await emailTicketService.deleteTicket(req.body);
    return res.status(500).json({
      data: response,
      status: true,
      messsage: "Successfully deleted ticket",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      messsage: "Unable to delete ticket",
      error: error,
    });
  }
};

module.exports = {
  createTicket,
  updateTicket,
  deleteTicket,
};
