'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Districts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      division_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'divisions',
          key: 'id'
        },
        onUpdate: "NO ACTION", 
        onDelete: "CASCADE"
      },
      name: {
        type: Sequelize.STRING
      },
      bn_name: {
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
    return queryInterface.dropTable('Districts');
  }
};