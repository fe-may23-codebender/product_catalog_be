'use strict';

import { Detail } from '../models/Detail';

export const getAllPhones = async () => {
  const phones = await Detail.findAll();

  return phones;
};

export const getById = async (itemId: string) => {
  const phone = await Detail.findOne({
    where: {
      itemId: itemId,
    } as { itemId: string },
  });

  return phone;
};
