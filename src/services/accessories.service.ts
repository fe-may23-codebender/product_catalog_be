'use strict';

import { Accessory } from '../models/Accessory';

export const getAllAccessories = async () => {
  const phones = await Accessory.findAll();

  return phones;
};

export const getById = async (itemId: string) => {
  const phone = await Accessory.findAll({
    where: {
      itemId: itemId,
    } as { itemId: string },
  });

  return phone;
};
