import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4200",
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world!!</h1>');
});

io.on('connection', (socket) => {
  socket.on('join', (name) => {
    console.log(`${name} joined`);
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
