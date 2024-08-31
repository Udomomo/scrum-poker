import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { DbClient } from './db';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4200",
  }
});

async function main() {
  const db = DbClient.initDb();

  io.on('connection', (socket) => {
    socket.on('join', (name: string) => {
      db.insertPlayer(name)
        .then((player) => {
          console.log (`Player has joined | id: ${player.id}, name: ${player.name}`);
          io.emit('player', player);
        })
        .catch((err) => {
          console.error(err);
        });
    });

    socket.on('updatePoint', (arg: {id: number, point: number}) => {
      db.updatePoint(arg.id, arg.point)
        .then(() => {
          console.log (`Player has updated point | id: ${arg.id}, point: ${arg.point}`);
          io.emit('updateDone');
        })
        .catch((err) => {
          console.error(err);
        });
    })
  });

  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

main();
