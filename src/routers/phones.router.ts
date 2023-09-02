'use strict';

import express from 'express';
export const phonesRouter = express.Router();
import { getAll, getOne } from '../controllers/phones.controller';

phonesRouter.get('/', getAll);
phonesRouter.get('/:itemId', getOne);
