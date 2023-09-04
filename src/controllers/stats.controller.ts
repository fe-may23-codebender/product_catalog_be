'use strict';

import { Request, Response } from 'express';
import { getByCategory } from '../services/stats.service';

export const getGroups = async (req: Request, res: Response) => {
  const groups = await getByCategory();

  res.send(groups);
};
