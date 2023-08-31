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

      phoneId: {
        type: Sequelize.STRING,
        field: 'phone_id',
        references: {
          model: 'phones',
          key: 'id',
        },
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
