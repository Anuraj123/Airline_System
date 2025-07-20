'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airlines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Airlines.hasMany(models.Flight,{
      foreignKey:'FlightPNR'
     }) 
    }
  }
  Airlines.init({
    referanceId: {type:DataTypes.STRING,allowNull:false},
    PNR: {type:DataTypes.STRING,allowNull:false,primaryKey:true,defaultValue:null,autoIncrement:true},
    capacity: {type:DataTypes.INTEGER,allowNull:false},
    planeName: {type:DataTypes.STRING,allowNull:false},
    From: {type:DataTypes.STRING,allowNull:false},
    To: {type:DataTypes.STRING,allowNull:false},
    TravelTime: {type:DataTypes.TIME,allowNull:false},
    AvailableSeats: {type:DataTypes.INTEGER,allowNull:false},
    BookedSeats: {type:DataTypes.INTEGER,allowNull:false},
  }, {
    sequelize,
    modelName: 'Airlines',
  });
  return Airlines;
};