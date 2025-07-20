"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmailTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmailTicket.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      fromCity: { type: DataTypes.STRING, allowNull: false },
      toCity: { type: DataTypes.STRING, allowNull: false },
      departure: { type: DataTypes.STRING, allowNull: false },
      arrival: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      PNR: { type: DataTypes.STRING, allowNull: false },
      dateAndTimeOfTravel: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "EmailTicket",
    }
  );
  return EmailTicket;
};
