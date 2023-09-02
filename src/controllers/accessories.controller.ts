'use strict';

import { Request, Response } from 'express';
import { getAllAccessories, getById } from '../services/accessories.service';

export const getAll = async (req: Request, res: Response) => {
  const accessories = await getAllAccessories();

  res.send(accessories);
};

export const getOne = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  const foundAccessory = await getById(itemId);

  if (!foundAccessory) {
    res.status(404).send('Accessory not found');

    return;
  }

  res.status(200).send(foundAccessory);
};
