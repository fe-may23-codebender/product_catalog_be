/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const jsonData = fs.readFileSync('./src/api/products.json', 'utf8');
    const products = JSON.parse(jsonData);
    for (const product of products) {
      product.phone_id = product.phoneId;
      product.item_id = product.itemId;
      product.full_price = product.fullPrice;
      delete product.fullPrice;
      delete product.itemId;
      delete product.phoneId;
    }

    await queryInterface.bulkInsert('products', products);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
