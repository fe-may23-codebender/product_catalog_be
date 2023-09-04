'use strict';

import { Product } from '../models/Product';
import { ProductInterface } from '../types/Product';

type countByCategory = {
  [category: string]: number;
};

function groupByCategory(products: ProductInterface[]) {
  const countByGroup: countByCategory = {
    phones: 0,
    tablets: 0,
    accessories: 0,
  };

  products.forEach((product) => {
    if (!(product.category in countByGroup)) {
      countByGroup[product.category] = 0;
    }
    countByGroup[product.category]++;
  });

  return countByGroup;
}

export const getByCategory = async () => {
  const products = await Product.findAll();

  return groupByCategory(products);
};
