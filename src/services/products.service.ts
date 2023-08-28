'use strict';

import { Product } from '../models/Product';

export const getAllProducts = async () => {
  const users = await Product.findAll();

  return users;
};

export const getById = async (productId: string) => {
  const user = await Product.findByPk(productId);

  return user;
};
