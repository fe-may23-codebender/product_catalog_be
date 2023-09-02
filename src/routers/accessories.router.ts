'use strict';

import express from 'express';
export const accessoryRouter = express.Router();
import { getAll, getOne } from '../controllers/accessories.controller';

accessoryRouter.get('/', getAll);
accessoryRouter.get('/:itemId', getOne);
