'use strict';

import { Order } from 'sequelize';
import { Product } from '../models/Product';

type Query = {
  sortBy: string;
  search: string;
  page: string;
  perPage: string;
  productTypeString: string;
};

export const getAllProducts = async ({
  search,
  perPage,
  page,
  sortBy,
  productTypeString,
}: Query) => {
  let products = await Product.findAll();

  const order: Order = [];

  switch (sortBy) {
  case 'age':
    order.push(['year', 'DESC']);
    break;

  case 'title':
    order.push(['name', 'ASC']);
    break;

  case 'price':
    order.push(['price', 'ASC']);
    break;

  default:
    break;
  }

  if (perPage === 'all' && page === '1') {
    products = await Product.findAll({
      order,
    });
  } else {
    const limit = +perPage;
    const offset = perPage === '1' ? 0 : (+page - 1) * limit;
    products = await Product.findAll({
      offset,
      limit,
      order,
    });
  }

  if (productTypeString) {
    if (productTypeString === '') {
      return products;
    } else {
      products = products.filter(
        (product) => product.category === productTypeString,
      );
    }
  }

  if (search) {
    const normalizedSearch = search.toLowerCase().trim();

    products = products.filter((product) => {
      const normalizedTitle = product.name.toLowerCase().trim();
      return normalizedTitle.includes(normalizedSearch);
    });
  }

  return products;
};

export const getById = async (productId: string) => {
  const product = await Product.findByPk(productId);

  return product;
};
