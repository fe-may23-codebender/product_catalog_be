'use strict';

import express from 'express';
export const homepageRouter = express.Router();
import { getProducts } from '../controllers/homepage.controller';

homepageRouter.get('/', getProducts);
