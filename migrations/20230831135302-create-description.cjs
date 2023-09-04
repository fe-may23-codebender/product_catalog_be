'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('descriptions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      itemId: {
        type: Sequelize.STRING,
        field: 'item_id',
        references: {
          model: 'details',
          key: 'item_id',
        }
      },

      title: {
        type: Sequelize.STRING,
      },

      text: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('descriptions');
  }
};
