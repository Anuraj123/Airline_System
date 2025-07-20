"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable('Users', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   email: {
    //     type: Sequelize.STRING,
    //     allowNull:false,
    //     unique:true
    //   },
    //   password: {
    //     type: Sequelize.STRING,
    //     allowNull:false,

    //   },
    //   phNo: {
    //     type: Sequelize.STRING,
    //     allowNull:false,
    //     unique:true
    //   },
    //   token: {
    //     type: Sequelize.STRING
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
    // await queryInterface.addColumn("Users", "firstName", {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
    await queryInterface.addColumn("Users", "userName", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
