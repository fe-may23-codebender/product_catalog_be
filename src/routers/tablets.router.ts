'use strict';

import express from 'express';
export const tabletRouter = express.Router();
import { getAll, getOne } from '../controllers/tablets.controller';

tabletRouter.get('/', getAll);
tabletRouter.get('/:itemId', getOne);
