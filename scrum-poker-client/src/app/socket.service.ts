import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io(Config.server);
  }

  submitName(name: string) {
    this.socket.emit("join", name);
  }
}
