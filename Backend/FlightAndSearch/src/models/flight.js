'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // define association here
      Flight.belongsTo(models.Airlines,{
        foreignKey:'PNR'
       }) 
    }
  }
  Flight.init({
    FlightPNR: {type:DataTypes.STRING,allowNull:false,unique:true},
    departureAirportId: {type:DataTypes.INTEGER,allowNull:false,unique:true},
    arrivalAirportId: {type:DataTypes.INTEGER,allowNull:false,unique:true},
    arrivalTime: {type:DataTypes.TIME,allowNull:false},
    price: {type:DataTypes.INTEGER,allowNull:false},
    totalSeats: {type:DataTypes.INTEGER,allowNull:false}
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};



//we are not using it for now