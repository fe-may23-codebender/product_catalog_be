'use strict';

import { Request, Response } from 'express';
import { getAllProducts, getById } from '../services/products.service';

export const getAll = async (req: Request, res: Response) => {
  const query = req.query;
  const products = await getAllProducts(query);

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
