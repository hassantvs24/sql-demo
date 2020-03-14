'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
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
      district_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'districts',
          key: 'id'
        },
        onUpdate: "NO ACTION", 
        onDelete: "CASCADE"
      },
      upazilla_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'upazilas',
          key: 'id'
        },
        onUpdate: "NO ACTION", 
        onDelete: "CASCADE"
      },
      union_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'unions',
          key: 'id'
        },
        onUpdate: "NO ACTION", 
        onDelete: "CASCADE"
      },
      address: {
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
    return queryInterface.dropTable('Locations');
  }
};