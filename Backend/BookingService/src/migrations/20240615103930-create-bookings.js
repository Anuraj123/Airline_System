"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable("Bookings", {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   email: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   firstName: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   lastName: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   bookedSeats: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //   },
    //   totalPrice: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //   },
    //   fromCity: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   toCity: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   departureAirport: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   arrivalAirport: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   PNR: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   timings: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    // });

    // await queryInterface.changeColumn("Bookings","lastName",{type:Sequelize.STRING,allowNull:false});
    // await queryInterface.changeColumn("Bookings","firstName",{type:Sequelize.STRING,allowNull:false});
    // await queryInterface.removeColumn("Bookings", "status");
    // await queryInterface.removeColumn("Bookings", "timings");
    // await queryInterface.addColumn("Bookings", "userName", {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Bookings");
  },
};
