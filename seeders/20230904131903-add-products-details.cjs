/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const fs = require('fs');
const path = require('path');

function getClearProduct(product) {
  const clearProduct = {
    item_id: product.itemId,
    namespace_id: product.namespaceId,
    name: product.name,
    capacity_available: product.capacityAvailable,
    capacity: product.capacity,
    price_regular: product.priceRegular,
    price_discount: product.priceDiscount,
    colors_available: product.colorsAvailable,
    color: product.color,
    images: product.images,
    screen: product.screen,
    resolution: product.resolution,
    processor: product.processor,
    ram: product.ram,
    camera: product.camera,
    zoom: product.zoom,
    cell: product.cell,
  };

  return clearProduct;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const phonesFolder = './src/api/phones';
    const phoneFiles = fs.readdirSync(phonesFolder);
    const productDetailsList = [];

    for (const file of phoneFiles) {
      const jsonData = fs.readFileSync(path.join(phonesFolder, file), 'utf8');
      const phoneData = JSON.parse(jsonData);

      const phone = getClearProduct(phoneData);

      productDetailsList.push(phone);
    }

    const tabletData = fs.readFileSync('./src/api/tablets.json', 'utf8');
    const tablets = JSON.parse(tabletData);
    for (const tablet of tablets) {
      const clearTablet = getClearProduct(tablet);

      productDetailsList.push(clearTablet);
    }

    const accessoryData = fs.readFileSync('./src/api/accessories.json', 'utf8');
    const accessories = JSON.parse(accessoryData);
    for (const accessory of accessories) {
      const clearAccessory = getClearProduct(accessory);

      productDetailsList.push(clearAccessory);
    }

    await queryInterface.bulkInsert('details', productDetailsList);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('details', null, {});
  },
};
