'use strict';

import { Product } from '../models/Product';

type Query = {
  category?: string,
  sortBy?: string,
  search?: string,
  page?: string,
  perPage?: string,
};

enum sortOptions {
  AGE = 'age',
  PRICE = 'price',
  TITLE = 'title',
}

export const getAllProducts = async (query: Query) => {
  const { category, sortBy, search, page, perPage } = query;
  let products = await Product.findAll();

  if (category) {
    products = products.filter(product => product.category === category);
  }

  if (sortBy) {
    products = products.sort((prevProduct, currProduct) => {
      switch (sortBy) {
      case sortOptions.AGE:
        return currProduct.year - prevProduct.year;

      case sortOptions.PRICE:
        return prevProduct.price - currProduct.price;

      case sortOptions.TITLE:
        return prevProduct.name.localeCompare(currProduct.name);

      default:
        return 0;
      }
    }
    );
  }

  if (search) {
    const normalizedSearch = search.toLowerCase().trim();

    products = products.filter((product) => {
      const normalizedTitle = product.name.toLowerCase().trim();
      return normalizedTitle.includes(normalizedSearch);
    });
  }

  if (page && perPage) {
    const pageNumber = parseInt(page);
    const itemsPerPage = parseInt(perPage);

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    products = products.slice(startIndex, endIndex);
  }

  return products;
};

export const getById = async (productId: string) => {
  const product = await Product.findByPk(productId);

  return product;
};
