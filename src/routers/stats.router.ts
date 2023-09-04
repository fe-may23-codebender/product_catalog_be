'use strict';

import express from 'express';
export const statsRouter = express.Router();
import { getGroups } from '../controllers/stats.controller';

statsRouter.get('/', getGroups);
