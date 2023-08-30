'use strict';

import { Product } from '../models/Product';

export const getAllProducts = async () => {
  const products = await Product.findAll();

  return products;
};

export const getById = async (productId: string) => {
  const product = await Product.findByPk(productId);

  return product;
};
