'use strict';

import { Phone } from '../models/Phone';

export const getAllPhones = async () => {
  const phones = await Phone.findAll();

  return phones;
};

export const getById = async (productId: string) => {
  const phone = await Phone.findByPk(productId);

  return phone;
};
