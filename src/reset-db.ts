import { Product, Phone, Description } from './models';
import { DescriptionInterface } from './types/Description';
import { PhoneInterface } from './types/Phone';
import { sequelize, connect } from './utils/db';
import fs from 'fs';
import path from 'path';

function reset() {
  return sequelize
    .sync({ force: true })
    .then(() => {
      console.log('success');
    })
    .catch((error) => {
      console.log(error);
    });
}

function addProducts() {
  try {
    const jsonData = fs.readFileSync('./src/api/products.json', 'utf8');
    const products = JSON.parse(jsonData);
    return Product.bulkCreate(products);
  } catch (error) {
    console.log('error adding products', error);
  }

}

async function addPhones() {
  const phonesFolder =  './src/api/phones';
  const phoneFiles = fs.readdirSync(phonesFolder);
  const phoneDataList: PhoneInterface[] = [];
  const descriptionDataList: DescriptionInterface[] = [];

  for (const file of phoneFiles) {
    try {
      const jsonData = fs.readFileSync(path.join(phonesFolder, file), 'utf8');
      const phoneData = JSON.parse(jsonData);

      const phone = {
        id: phoneData.id,
        namespaceId: phoneData.namespaceId,
        name: phoneData.name,
        capacityAvailable: phoneData.capacityAvailable,
        capacity: phoneData.capacity,
        priceRegular: phoneData.priceRegular,
        priceDiscount: phoneData.priceDiscount,
        colorsAvailable: phoneData.colorsAvailable,
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

      const descriptions = phoneData.description.map(
        (desc: DescriptionInterface) => ({
          title: desc.title,
          text: desc.text,
          phoneId: phoneData.id,
        }),
      );

      descriptionDataList.push(...descriptions);
    } catch (error) {
      console.log('error reading or parsing', error);
    }
  }

  try {
    await sequelize.transaction(async (transaction) => {
      await Phone.bulkCreate(phoneDataList, {
        transaction,
      });

      await Description.bulkCreate(descriptionDataList, {
        transaction,
      });

      console.log('phone add success');
    });
  } catch (error) {
    console.log('error adding phones', error);
  }
}

connect()
  .then(() => reset())
  .then(() => addProducts())
  .then(() => addPhones())
  .catch((error) => {
    console.log('overall error', error);
  })
  .finally(() => {
    sequelize.close();
  });
