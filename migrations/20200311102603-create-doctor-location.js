'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('DoctorLocations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'locations',
          key: 'id'
        },
        onUpdate: "NO ACTION", 
        onDelete: "CASCADE"
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'doctors',
          key: 'id'
        },
        onUpdate: "NO ACTION", 
        onDelete: "CASCADE"
      },
      description: {
        type: Sequelize.TEXT
      },
      contact: {
        type: Sequelize.STRING
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DoctorLocations');
  }
};