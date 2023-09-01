'use strict';

import { Order } from 'sequelize';
import { Product } from '../models/Product';
import { ProductInterface } from '../types/Product';

type Query = {
  sortBy: string,
  search: string,
  page: string,
  perPage: string,
};

type countByCategory = {
  [category: string]: number;
}

function calculateByGroup(products: ProductInterface[]) {
  const countByGroup: countByCategory = {
    'phones': 0,
    'tablets': 0,
    'accessories': 0,
  };

  products.forEach(product => {
    if (!(product.category in countByGroup)) {
      countByGroup[product.category] = 0;
    }
    countByGroup[product.category]++;
  });

  return countByGroup;
}

export const getAllProducts = async ({ search, perPage, page, sortBy }: Query) => {
  let products = await Product.findAll();
  const allProducts = calculateByGroup(products);

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

  if (perPage === 'all') {
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

  if (search) {
    const normalizedSearch = search.toLowerCase().trim();

    products = products.filter((product) => {
      const normalizedTitle = product.name.toLowerCase().trim();
      return normalizedTitle.includes(normalizedSearch);
    });
  }

  return {
    countByGroup: allProducts,
    items: products,
  };
};

export const getById = async (productId: string) => {
  const product = await Product.findByPk(productId);

  return product;
};
