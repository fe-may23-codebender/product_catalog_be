'use strict';

import { Request, Response } from 'express';
import { getAllTablets, getById } from '../services/tablets.service';

export const getAll = async (req: Request, res: Response) => {
  const tablets = await getAllTablets();

  res.send(tablets);
};

export const getOne = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  const foundTablet = await getById(itemId);

  if (!foundTablet) {
    res.status(404).send('Tablet not found');

    return;
  }

  res.status(200).send(foundTablet);
};
