'use strict';

import { Request, Response } from 'express';
import { getAllPhones, getById } from '../services/details.service';

export const getAll = async (req: Request, res: Response) => {
  const details = await getAllPhones();

  res.send(details);
};

export const getOne = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  const foundDetail = await getById(itemId);

  if (!foundDetail) {
    res.status(404).send('Phone not found');

    return;
  }

  res.status(200).send(foundDetail);
};
