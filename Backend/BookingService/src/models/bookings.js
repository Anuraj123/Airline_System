"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bookings.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        get: function () {
          return JSON.parse(this.getDataValue("firstName"));
        },
        set: function (value) {
          this.setDataValue("firstName", JSON.stringify(value));
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        get: function () {
          return JSON.parse(this.getDataValue("lastName"));
        },
        set: function (value) {
          this.setDataValue("lastName", JSON.stringify(value));
        },
      },
      fromCity: { type: DataTypes.STRING, allowNull: false },
      toCity: { type: DataTypes.STRING, allowNull: false },
      departureAirport: { type: DataTypes.STRING, allowNull: false },
      arrivalAirport: { type: DataTypes.STRING, allowNull: false },
      PNR: { type: DataTypes.STRING, allowNull: false },
      bookedSeats: { type: DataTypes.INTEGER, allowNull: false },
      totalPrice: { type: DataTypes.INTEGER, allowNull: false },
      dateAndTimeOfTravel: { type: DataTypes.DATE, allowNull: false },
      userName:{type:DataTypes.STRING,allowNull:false}
    },
    {
      sequelize,
      modelName: "Bookings",
    }
  );
  return Bookings;
};
