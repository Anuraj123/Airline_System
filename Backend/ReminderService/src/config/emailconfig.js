const nodemailer = require("nodemailer");


    const sender= nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anurajsinghparmar1310@gmail.com",
        pass: "sfaydesyqrjzxrec",
      },
    });

  

module.exports = sender
