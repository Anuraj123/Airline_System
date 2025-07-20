"use strict";

const { DataTypes, INTEGER } = require("sequelize");
const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable('Airlines', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   plane_id: {
    //     type: Sequelize.STRING,
    //     allowNull:false,
    //     // unique:true
    //   },
    //   capacity: {
    //     type: Sequelize.INTEGER,
    //     allowNull:false
    //   },
    //   plane_name: {
    //     type: Sequelize.STRING,
    //     allowNull:false
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
    // await queryInterface.renameColumn("Airlines", "airplaneId", "PNR");
//     await queryInterface.changeColumn("Airlines", "PNR", {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
// primaryKey:true
//     });
    // await queryInterface.removeColumn('Airlines',"airplaneId");
    // await queryInterface.addColumn("Airlines", "referanceId", {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("Airlines", "BookedSeats", {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("Airlines", "AvailableSeats", {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("Airlines", "From", {
    //   type: Sequelize.STRING,
    //   allowNull: false,

    // });
    // await queryInterface.addColumn("Airlines", "To", {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("Airlines", "TravelTime", {
    //   type: Sequelize.TIME,
    //   allowNull: false,
      
    // });
    // await queryInterface.addColumn('Airlines','air',{type:sequelize.ARRAY(DataTypes.INTEGER)})
    // await queryInterface.changeColumn('Airlines','TravelTime',{type:Sequelize.TIME,allowNull:false})
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Airlines");
  },
};
