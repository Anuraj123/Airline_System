'use strict';
const {
  Model
} = require('sequelize');
const airport = require('./airport');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      City.hasMany(models.Airport,{
        foreignKey:'cityId'
      })
    }
  }
  City.init({
    name: {type:DataTypes.STRING,allowNull:false,unique:true},
    cityId:{type:DataTypes.INTEGER,allowNull:false,autoIncrement:true,primaryKey:true,defaultValue:null}

  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};