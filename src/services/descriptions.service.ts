'use strict';

import { Description } from '../models/Description';

export const getAllDescriptions = async () => {
  const descriptions = await Description.findAll();

  return descriptions;
};

export const getByPhoneId = async (phoneId: string) => {
  const descriptions = await Description.findAll({
    where: {
      itemId: phoneId,
    } as { itemId: string },
  });

  return descriptions;
};
