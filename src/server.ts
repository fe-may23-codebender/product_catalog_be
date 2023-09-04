import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { connect } from './utils/db';
import { productRouter } from './routers/products.router';
import { detailRouter } from './routers/detail.router';
import { descriptionsRouter } from './routers/descriptions.router';
import { statsRouter } from './routers/stats.router';
import { homepageRouter } from './routers/homepage.router';

connect();

const PORT = process.env.PORT;
// const CLIENT_URL = process.env.CLIENT_URL;

const app = express();

app
  .use(cors({ origin: '*' }))
  .use(express.json())
  .get('/', (req, res) => {
    res.send('Product catalog API');
  })
  .use('/products', productRouter)
  .use('/details', detailRouter)
  .use('/descriptions', descriptionsRouter)
  .use('/stats', statsRouter)
  .use('/homepage', homepageRouter);
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
