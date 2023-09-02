'use strict';

import { Phone } from '../models/Phone';

export const getAllPhones = async () => {
  const phones = await Phone.findAll();

  return phones;
};

export const getById = async (itemId: string) => {
  const phone = await Phone.findAll({
    where: {
      itemId: itemId,
    } as { itemId: string },
  });

  return phone;
};
