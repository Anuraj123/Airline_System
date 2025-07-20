'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airport.belongsTo(models.City,{
        foreignKey:'cityId'
      })
    }
  }
  Airport.init({
    name: {type:DataTypes.STRING,allowNull:false,unique:true,
    
    },
    cityId:{type:DataTypes.INTEGER,allowNull:false},
    airportId:{type:DataTypes.INTEGER,allowNull:false,autoIncrement:true,primaryKey:true,defaultValue:null},
    airLineIds:{type:DataTypes.STRING,allowNull:false},
    

    
  }, {
    sequelize,
    modelName: 'Airport',
  }
  
  
  );
  
  return Airport;
};