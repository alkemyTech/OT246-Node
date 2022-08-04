'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Slides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      text: {
        allowNull: false,
        type: Sequelize.STRING
      },
      order: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      organizationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Organizations',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Slides');
  }
};