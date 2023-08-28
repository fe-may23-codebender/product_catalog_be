import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { connect } from './utils/db';
import { productRouter } from './routers/products.router';

connect();

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const app = express();

app
  .use(cors({ origin: CLIENT_URL }))
  .use(express.json())
  .get('/', (req, res) => {
    res.send('Product catalog API');
  })
  .use('/products', productRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
