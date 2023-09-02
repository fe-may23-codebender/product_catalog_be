'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      itemId: {
        type: Sequelize.STRING,
        references: {
          model: 'products',
          key: 'item_id',
        },
      },

      namespaceId: {
        type: Sequelize.STRING,
        field: 'namespace_id',
      },

      name: {
        type: Sequelize.STRING,
      },

      capacityAvailable: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        field: 'capacity_available',
      },

      capacity: {
        type: Sequelize.STRING,
      },

      priceRegular: {
        type: Sequelize.INTEGER,
        field: 'price_regular',
      },

      priceDiscount: {
        type: Sequelize.INTEGER,
        field: 'price_discount',
      },

      colorsAvailable: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        field: 'colors_available',
      },

      color: {
        type: Sequelize.STRING,
      },

      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },

      screen: {
        type: Sequelize.STRING
      },

      resolution: {
        type: Sequelize.STRING
      },

      processor: {
        type: Sequelize.STRING
      },

      ram: {
        type: Sequelize.STRING
      },

      camera: {
        type: Sequelize.STRING
      },

      zoom: {
        type: Sequelize.STRING
      },

      cell: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('phones');
  }
};
