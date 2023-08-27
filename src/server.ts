import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const app = express();

app
  .use(cors({ origin: CLIENT_URL }))
  .use(express.json())
  .use('/', (req, res) => {
    res.send('Product catalog API');
  });

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
