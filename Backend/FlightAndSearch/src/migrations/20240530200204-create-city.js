'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
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
    // await queryInterface.addColumn('Cities', 'cityId', { type: DataTypes.INTEGER });
    // await queryInterface.renameColumn('Cities', 'id', 'cityId');
    // await queryInterface.removeColumn('Cities','cityId')
    // await queryInterface.addColumn('Cities','cityId',{type:Sequelize.INTEGER,allowNull:false,autoIncrement:true,primaryKey:true})
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cities');
  }
};