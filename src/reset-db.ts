import { Product } from './models';
import { sequelize, connect } from './utils/db';
import fs from 'fs';

function reset() {
  return sequelize
    .sync()
    .then(() => {
      console.log('success');
    })
    .catch((error) => {
      console.log(error);
    });
}

function addProducts() {
  const jsonData = fs.readFileSync('./src/api/products.json', 'utf8');
  const products = JSON.parse(jsonData);
  return Product.bulkCreate(products);
}

connect()
  .then(() => reset())
  .then(() => addProducts())
  .catch((error) => {
    console.log(error);
  });
