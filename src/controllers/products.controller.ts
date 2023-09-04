'use strict';

import { Request, Response } from 'express';
import { getAllProducts, getById } from '../services/products.service';

const sortOptions = ['age', 'title', 'price', ''];
const perPageOptions = ['4', '8', '16', 'all'];
const categoryOptions = ['phones', 'tablets', 'accessories'];

export const getAll = async (req: Request, res: Response) => {
  const query = req.query;
  const {
    search = '',
    perPage = 'all',
    page = '1',
    sortBy = '',
    productType = 'phones',
  } = query;

  const productTypeString = productType as string;
  if (
    typeof sortBy !== 'string' ||
    !sortOptions.includes(sortBy) ||
    typeof perPage !== 'string' ||
    !perPageOptions.includes(perPage) ||
    (perPage === 'all' && page !== '1') ||
    typeof page !== 'string' ||
    typeof search !== 'string' ||
    !categoryOptions.includes(productTypeString)
  ) {
    res.sendStatus(422);
    return;
  }

  const products = await getAllProducts({
    search,
    perPage,
    page,
    sortBy,
    productTypeString,
  });

  res.send(products);
};

export const getOne = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const foundProduct = await getById(productId);

  if (!foundProduct) {
    res.status(404).send('Product not found');

    return;
  }

  res.status(200).send(foundProduct);
};
