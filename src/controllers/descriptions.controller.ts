'use strict';

import { Request, Response } from 'express';
import {
  getAllDescriptions,
  getByPhoneId,
} from '../services/descriptions.service';

export const getAll = async (req: Request, res: Response) => {
  const descriptions = await getAllDescriptions();

  res.send(descriptions);
};

export const getOne = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  const foundDescription = await getByPhoneId(itemId);

  if (!foundDescription) {
    res.status(404).send('Description not found');

    return;
  }

  res.status(200).send(foundDescription);
};
