"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("EmailTickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // status: {
      //   type: Sequelize.ENUM,
      //   allowNull: false,
      //   values: ["Pending", "Process", "Complete"],
      //   defaultValue: "Pending",
      // },
      // subject: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
      // contant: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
      // notificationTime: {
      //   type: Sequelize.DATE,
      //   allowNull: false,
      // },
      // recepientEmail: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("EmailTickets");
  },
};
