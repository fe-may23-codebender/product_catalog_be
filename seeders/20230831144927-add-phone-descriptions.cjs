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

    for (const file of phoneFiles) {
      const jsonData = fs.readFileSync(path.join(phonesFolder, file), 'utf8');
      const phoneData = JSON.parse(jsonData);

      const descriptions = phoneData.description.map((desc) => ({
        title: desc.title,
        text: desc.text,
        phone_id: phoneData.id,
      }));

      descriptionDataList.push(...descriptions);
    }
    await queryInterface.bulkInsert('descriptions', descriptionDataList);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('descriptions', null, {});
  }
};
