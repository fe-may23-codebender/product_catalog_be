/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const fs = require('fs');
const path = require('path');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const phonesFolder = './src/api/phones';
    const phoneFiles = fs.readdirSync(phonesFolder);
    const phoneDataList = [];

    for (const file of phoneFiles) {
      const jsonData = fs.readFileSync(
        path.join(phonesFolder, file),
        'utf8',
      );
      const phoneData = JSON.parse(jsonData);

      const phone = {
        id: phoneData.id,
        namespace_id: phoneData.namespaceId,
        name: phoneData.name,
        capacity_available: phoneData.capacityAvailable,
        capacity: phoneData.capacity,
        price_regular: phoneData.priceRegular,
        price_discount: phoneData.priceDiscount,
        colors_available: phoneData.colorsAvailable,
        color: phoneData.color,
        images: phoneData.images,
        screen: phoneData.screen,
        resolution: phoneData.resolution,
        processor: phoneData.processor,
        ram: phoneData.ram,
        camera: phoneData.camera,
        zoom: phoneData.zoom,
        cell: phoneData.cell,
      };

      phoneDataList.push(phone);
    }

    await queryInterface.bulkInsert('phones', phoneDataList);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('phones', null, {});
  }
};
