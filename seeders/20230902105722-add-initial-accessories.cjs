/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const jsonData = fs.readFileSync('./src/api/accessories.json', 'utf8');
    const accessories = JSON.parse(jsonData);
    const newAccessories = [];
    for (const accessory of accessories) {
      const clearAccessory = {
        item_id: accessory.itemId,
        namespace_id: accessory.namespaceId,
        name: accessory.name,
        capacity_available: accessory.capacityAvailable,
        capacity: accessory.capacity,
        price_regular: accessory.priceRegular,
        price_discount: accessory.priceDiscount,
        colors_available: accessory.colorsAvailable,
        color: accessory.color,
        images: accessory.images,
        screen: accessory.screen,
        resolution: accessory.resolution,
        processor: accessory.processor,
        ram: accessory.ram,
        camera: accessory.camera,
        zoom: accessory.zoom,
        cell: accessory.cell,
      };

      newAccessories.push(clearAccessory);
    }

    await queryInterface.bulkInsert('accessories', newAccessories);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('accessories', null, {});
  },
};
