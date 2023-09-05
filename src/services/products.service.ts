'use strict';

import { Op, Order, OrderItem } from 'sequelize';
import { Product } from '../models/Product';

type Query = {
  sortBy: string;
  search: string;
  page: string;
  perPage: string;
  productTypeString: string;
};

type ProductQuery = {
  order?: OrderItem[];
  offset?: number;
  limit?: number;
  where: {
    name?: {
      [Op.iLike]: string;
    };
    category?: string;
  };
};

export const getAllProducts = async ({
  search,
  perPage,
  page,
  sortBy,
  productTypeString,
}: Query) => {
  const order: Order = [];
  const query: ProductQuery = {
    where: {},
  };

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

  query.order = order;

  if (perPage !== 'all' || page !== '1') {
    const limit = +perPage;
    const offset = (+page - 1) * limit;
    query.limit = limit;
    query.offset = offset;
  }

  if (productTypeString) {
    query.where.category = productTypeString;
  }

  if (search) {
    const normalizedSearch = search.toLowerCase().trim();
    query.where.name = {
      [Op.iLike]: `%${normalizedSearch}%`,
    };
  }

  return Product.findAll(query);
};

export const getById = async (productId: string) => {
  const product = await Product.findByPk(productId);

  return product;
};
