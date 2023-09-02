/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const phonesFolder = './src/api/phones';
    const phoneFiles = fs.readdirSync(phonesFolder);
    const descriptionDataList = [];
    const tabletData = fs.readFileSync('./src/api/tablets.json', 'utf8');
    const tablets = JSON.parse(tabletData);
    const accessoryData = fs.readFileSync('./src/api/accessories.json', 'utf8');
    const accessories = JSON.parse(accessoryData);

    for (const file of phoneFiles) {
      const jsonData = fs.readFileSync(path.join(phonesFolder, file), 'utf8');
      const phoneData = JSON.parse(jsonData);

      const phoneDescriptions = phoneData.description.map((desc) => ({
        title: desc.title,
        text: desc.text,
        item_id: phoneData.itemId,
      }));

      descriptionDataList.push(...phoneDescriptions);
    }

    for (const tablet of tablets) {
      if (tablet.description && Array.isArray(tablet.description)) {
        const tabletDescriptions = tablet.description.map((desc) => ({
          title: desc.title,
          text: desc.text,
          item_id: tablet.itemId,
        }));

        descriptionDataList.push(...tabletDescriptions);
      }
    }

    for (const accessory of accessories) {
      if (accessory.description && Array.isArray(accessory.description)) {
        const accessoryDescriptions = accessory.description.map((desc) => ({
          title: desc.title,
          text: desc.text,
          item_id: accessory.itemId,
        }));

        descriptionDataList.push(...accessoryDescriptions);
      }
    }

    await queryInterface.bulkInsert('descriptions', descriptionDataList);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('descriptions', null, {});
  }
};
