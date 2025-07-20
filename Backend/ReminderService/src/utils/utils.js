const axios = require("axios");

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
class Utils {
  constructor() {}
  async getBooking(email, PNR) {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/getBooking`,
        {
          data: {
            email: email,
            PNR: PNR,
          },
        }
      );

      return response.data.data;
    } catch (error) {

    }
  }
  setDateandTime(dateAndTimeOfTravel) {
    const data = new Date(dateAndTimeOfTravel);

    const payload = {};
    payload.date =
      data.getDate() + "/" + month[data.getMonth()] + "/" + data.getFullYear();
    payload.time = data.getHours() + ":" + data.getMinutes();
    return payload;
  }
  setDateandTimeforScheduler(dateAndTimeOfTravel) {
    const tempdata = new Date(dateAndTimeOfTravel);
    tempdata.setHours(tempdata.getHours() - 5);
    const date = new Date(
      tempdata.getFullYear(),
      tempdata.getMonth(),
      tempdata.getDate(),
      tempdata.getHours(),
      tempdata.getMinutes(),
      0
    );

    return date;
  }
}

module.exports = Utils;
