import express from 'express';
import { stat } from 'fs';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/health', (req, res) => {
  try {
    res.send('I am healty');
  } catch (error) {
    res.status(500).send('I am not healty');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});