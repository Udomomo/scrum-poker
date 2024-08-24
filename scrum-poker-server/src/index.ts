import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
 