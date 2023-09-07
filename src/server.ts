import express from 'express';
import cors from 'cors';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

import { connect } from './utils/db';
import { productRouter } from './routers/products.router';
import { detailRouter } from './routers/detail.router';
import { descriptionsRouter } from './routers/descriptions.router';
import { statsRouter } from './routers/stats.router';
import { homepageRouter } from './routers/homepage.router';
import { authRouter } from './routers/auth.router';

connect();

const PORT = process.env.PORT;
// const CLIENT_URL = process.env.CLIENT_URL;

const app = express();
app.use(express.static('public'));

app
  .use(cors({ origin: '*' }))
  .use(express.json())
  .get('/', (req, res) => {
    fs.readFile('public/index.html', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error reading documentation file');
      } else {
        res.send(data);
      }
    });
  })
  .use('/products', productRouter)
  .use('/details', detailRouter)
  .use('/descriptions', descriptionsRouter)
  .use('/stats', statsRouter)
  .use('/homepage', homepageRouter)
  .use('/registration', authRouter);
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
