'use strict';

import { Tablet } from '../models/Tablet';

export const getAllTablets = async () => {
  const phones = await Tablet.findAll();

  return phones;
};

export const getById = async (productId: string) => {
  const phone = await Tablet.findAll({
    where: {
      itemId: productId,
    } as { itemId: string },
  });

  return phone;
};
