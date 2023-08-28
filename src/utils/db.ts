'use strict';

import { Sequelize } from 'sequelize-typescript';
import { Product, Phone, Description } from '../models';

const URI =
  'postgres://codebender:NGWTFjT4naeAHFBTDR4tFRZOM4uuXhxr@dpg-cjm8ahfv9s6c73ekkcs0-a.frankfurt-postgres.render.com/products_db_xp5d';

export const sequelize = new Sequelize(URI, {
  models: [Description, Phone, Product],
  dialectOptions: {
    ssl: true,
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
