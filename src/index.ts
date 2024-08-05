import express from 'express';
import { automate } from './handlers/automate';

const router = express.Router();
const app = express();
const port = 3000;
app.use(router);

router.get('/', (req, res) => {
  res.send('hello world');
});

router.post('/automate', automate)

router.get('/now', (req, res) => {
  res.send({time: new Date()});
});

router.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
