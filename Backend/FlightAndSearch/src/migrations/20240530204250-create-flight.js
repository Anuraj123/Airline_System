'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique:true
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique:true
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique:true
      },
      arrivalTime: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      departureTime: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
        
      },
      boardingGates: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique:true
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull:false,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.changeColumn('Flights','arrivalTime',{type:Sequelize.TIME,allowNull:false})
    // await queryInterface.renameColumn('Flights', 'flight_id', 'flightId');
// await queryInterface.removeColumn('Flights','departureTime');
// await queryInterface.renameColumn('Flights','flightNumber','FlightPNR');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};