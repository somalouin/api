import express from 'express';
const router = express.Router();

const app = express();
const port = 3000;

app.use(router);

router.get('/', (req, res) => {
  res.send('hello world');
});

router.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});