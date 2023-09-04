'use strict';

import { Request, Response } from 'express';
import { homepageProducts } from '../services/homepage.service';

export const getProducts = async (req: Request, res: Response) => {
  const homepagePr = await homepageProducts();

  res.send(homepagePr);
};
