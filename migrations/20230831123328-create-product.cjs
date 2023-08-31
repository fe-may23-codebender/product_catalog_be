'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      category: {
        type: Sequelize.STRING,
      },

      phoneId: {
        type: Sequelize.STRING,
        field: 'phone_id',
        references: {
          model: 'phones',
          key: 'id',
        }
      },
      itemId: {
        type: Sequelize.STRING,
        field: 'item_id',
      },
      name: {
        type: Sequelize.STRING,
      },

      fullPrice: {
        type: Sequelize.INTEGER,
        field: 'full_price',
      },

      price: {
        type: Sequelize.INTEGER,
      },

      screen: {
        type: Sequelize.STRING,
      },

      capacity: {
        type: Sequelize.STRING,
      },

      color: {
        type: Sequelize.STRING,
      },

      ram: {
        type: Sequelize.STRING,
      },

      year: {
        type: Sequelize.INTEGER,
      },

      image: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('products');
  }
};
