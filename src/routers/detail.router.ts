'use strict';

import express from 'express';
export const detailRouter = express.Router();
import { getAll, getOne } from '../controllers/details.controller';

detailRouter.get('/', getAll);
detailRouter.get('/:itemId', getOne);
