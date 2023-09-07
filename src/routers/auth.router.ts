'use strict';

import express from 'express';
export const authRouter = express.Router();
import { register } from '../controllers/auth.controller';

authRouter.post('/', register);
