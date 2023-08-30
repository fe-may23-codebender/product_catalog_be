'use strict';

import { Sequelize } from 'sequelize-typescript';
import { Product, Phone, Description } from '../models';
import dotenv from 'dotenv';
dotenv.config();

const { DB_PASSWORD, DB_HOST, DB_USER, DB_NAME } = process.env;
const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
console.log(URI);

export const sequelize = new Sequelize(URI, {
  models: [Description, Phone, Product],
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: true,
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
