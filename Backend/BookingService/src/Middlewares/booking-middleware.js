const axios = require("axios");

const checkLogin = (req, res, next) => {
  // console.log(req.body)
  if (!req.body.data.email) {
    // console.log(req.body)
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: "User not logged in",
    });
  }
  next();
};

const validateUser = async (req, res, next) => {
  

  const isAuthenticated = await axios.get(
    "http://localhost:3003/api/v1/isAuth",
    {
      headers: {
        "Authorization": req.headers.authorization,
        
      },
    }
  );
  console.log(isAuthenticated)
  if (!isAuthenticated) {
    throw {
      err: res.status(500).json({
        success: false,
        data: {},
        message: "Something went wrong",
        err: "User not logged in",
      }),
    };
  }

  next();
};

module.exports = {
  validateUser,
  checkLogin,
};
