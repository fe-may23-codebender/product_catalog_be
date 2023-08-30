'use strict';

import { Request, Response } from 'express';
import { getAllPhones, getById } from '../services/phones.service';

export const getAll = async (req: Request, res: Response) => {
  const phones = await getAllPhones();

  res.send(phones);
};

export const getOne = async (req: Request, res: Response) => {
  const { phoneId } = req.params;
  const foundPhone = await getById(phoneId);

  if (!foundPhone) {
    res.status(404).send('Phone not found');

    return;
  }

  res.status(200).send(foundPhone);
};
