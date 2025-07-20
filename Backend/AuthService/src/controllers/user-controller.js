const { UserService } = require("../services/index");

const userService = new UserService();
const register = async (req, res) => {
  try {
    console.log(req.body);
    const response = await userService.createUser(req.body.data);
    return res.status(201).json({
      data: response,
      status: true,
      message: "Succesfully registered the user",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to  register the user",
      error: error.explanation,
    });
  }
};
const signIn = async (req, res) => {
  try {

    const response = await userService.SignIn(req.query);
    return res.status(201).json({
      data: response,
      status: true,
      message: "Succesfully logged the user",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to  log the user",
      error: error.explanation,
    });
  }
};
const isAuthenticated = async (req, res) => {
  try {

    const token = req.headers.authorization;
    console.log(token,"rgff")
    const response = await userService.isAuthenticated(token);
    return res.status(201).json({
      data: response,
      status: true,
      message: "Succesfully authenticated the user",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to the authenticate user",
      error: error.explanation,
    });
  }
};

const getUser = async (req, res) => {
  try {

    const response = await userService.getUser(req.body);
    return res.status(201).json({
      data: response,
      status: true,
      message: "Succesfully got the user",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "unable to get the user",
      error: error.explanation,
    });
  }
};

module.exports = {
  register,signIn,isAuthenticated,getUser
};
