'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable('Airports', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   name: {
    //     type: Sequelize.STRING,
    //     allowNull:false,
    //     unique:true
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
    // await queryInterface.renameColumn('Airports', 'airport_id', 'airportId');
    await queryInterface.removeColumn('Airports','airLineIds')

    // await queryInterface.addColumn('Airports','airportId',{type:Sequelize.INTEGER,allowNull:false,autoIncrement:true,primaryKey:true})

await queryInterface.addColumn('Airports','airLineIds',{ type: Sequelize.STRING,
  allowNull: false,
  get() {
      return this.getDataValue('airLineIds').split(';')
  },
  set(val) {
     this.setDataValue('airLineIds',val+(';'));
  },});

    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airports');

  },
  
};