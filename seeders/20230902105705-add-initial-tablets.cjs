/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const jsonData = fs.readFileSync('./src/api/tablets.json', 'utf8');
    const tablets = JSON.parse(jsonData);
    const newTablets = [];
    for (const tablet of tablets) {
      const clearTablet = {
        itemId: tablet.itemId,
        namespace_id: tablet.namespaceId,
        name: tablet.name,
        capacity_available: tablet.capacityAvailable,
        capacity: tablet.capacity,
        price_regular: tablet.priceRegular,
        price_discount: tablet.priceDiscount,
        colors_available: tablet.colorsAvailable,
        color: tablet.color,
        images: tablet.images,
        screen: tablet.screen,
        resolution: tablet.resolution,
        processor: tablet.processor,
        ram: tablet.ram,
        camera: tablet.camera,
        zoom: tablet.zoom,
        cell: tablet.cell,
      };

      newTablets.push(clearTablet);
    }

    await queryInterface.bulkInsert('tablets', newTablets);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('tablets', null, {});
  },
};
