'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
const SALT=10;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {type:DataTypes.STRING,allowNull:false,unique:true},
    password: {type:DataTypes.STRING,allowNull:false},
    phNo: {type:DataTypes.STRING,allowNull:false,unique:true},
    firstName:{type:DataTypes.STRING,allowNull:false},
    lastName:{type:DataTypes.STRING,allowNull:false},
    userName:{type:DataTypes.STRING,allowNull:false}
  }, {  
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user)=>{
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password=encryptedPassword;
  })
  return User;
};