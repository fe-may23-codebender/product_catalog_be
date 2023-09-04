'use strict';

import { literal } from 'sequelize';
import { Product } from '../models';

function getTenNewestProducts() {
  const firstTen = Product.findAll({
    order: [['year', 'DESC']],
    limit: 10,
  });

  return firstTen;
}

function getTenWithDiscount() {
  const firstTen = Product.findAll({
    order: [
      [literal('(full_price - price)'), 'DESC'],
    ],
    limit: 10,
  });

  return firstTen;
}

export const homepageProducts = async () => {
  const newest = await getTenNewestProducts();
  const discount = await getTenWithDiscount();

  return {newest, discount};
};
