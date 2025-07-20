const sender = require("../config/emailconfig");

class EmailFormat {
  constructor() {}

  bookedNotificationEmail = (
    email,
    // dateOfTravel,
    // timeOfTravel,
    fromCity,
    toCity,
    departure,
    arrival,
    PNR
  ) => {
    try {
      sender.sendMail({
        from: "anurajsinghparmar1310@gmail.com",
        
        to:"anurajsinghparmar1310@gmail.com",
        subject: `Flight from ${fromCity} to ${toCity}`,
        text: `Hi Mr ${email}
                I am pleased to inform you that your flight with PNR ${PNR} from ${departure} to ${arrival} is scheduled on this date with this time
                Thank You`,
      });
    } catch (error) {}
  };
  bookedTicketEmail = (
    userName,
    email,
    dateAndTime,
    fromCity,
    toCity,
    departure,
    arrival,
    firstName,
    lastName,
    PNR
  ) => {
    try {
      function a() {

        
        let data = "";

        for (let i = 0; i < firstName.firstName.length; i++) {
          data =
            data +
            " " +
            firstName.firstName[i] +
            " " +
            lastName.lastName[i] +
            " \n";
        }

        return data;
      }
      sender.sendMail({
        from: "anurajsinghparmar1310@gmail.com",
        to: email,
        subject: `Flight details for PNR ${PNR}`,
        text: `Hi ${userName},

      I am pleased to inform you that your flight with PNR ${PNR} from ${departure}, ${fromCity}  to ${arrival}, ${toCity} is scheduled on this ${dateAndTime.date} at ${dateAndTime.time}. Please enjoy your journy.
        
Here are the names of booked passengers :-
        
${a()}
Thank You :)`,
      });
    } catch (error) {
      console.log(error)
    }
  };
  bookingCancelledEmail = (
    email,
    dateOfTravel,
    timeOfTravel,
    fromCity,
    toCity,
    departure,
    arrival,
    PNR
  ) => {
    try {
      sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailText,
      });
    } catch (error) {}
  };
  bookingUpdatedEmail = (
    email,
    dateOfTravel,
    timeOfTravel,
    fromCity,
    toCity,
    departure,
    arrival,
    PNR
  ) => {
    try {
      sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailText,
      });
    } catch (error) {}
  };
}

module.exports = { EmailFormat };
