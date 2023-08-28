'use strict';

import express from 'express';
export const productRouter = express.Router();
import { getAll, getOne } from '../controllers/products.controller';

productRouter.get('/', getAll);
productRouter.get('/:productId', getOne);
