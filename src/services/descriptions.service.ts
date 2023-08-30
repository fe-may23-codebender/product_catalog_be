'use strict';

import { Description } from '../models/Description';

export const getAllDescriptions = async () => {
  const descriptions = await Description.findAll();

  return descriptions;
};

export const getById = async (descriptionId: string) => {
  const description = await Description.findByPk(descriptionId);

  return description;
};
