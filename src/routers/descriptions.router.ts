'use strict';

import express from 'express';
export const descriptionsRouter = express.Router();
import { getAll, getOne } from '../controllers/descriptions.controller';

descriptionsRouter.get('/', getAll);
descriptionsRouter.get('/:itemId', getOne);
