import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Config } from './config';
import { Observable } from 'rxjs';
import { Player } from './models/player';

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

  updatePoint(id: number, point: number) {
    this.socket.emit("updatePoint", { id: id, point: point });
  }

  getName() {
    return new Observable<Player>(observer => {
      this.socket.on("player", (player: Player) => {
        observer.next(player);
      });
      return () => { this.socket.disconnect(); };
    });
  }

  updateDone() {
    return new Observable<number>(observer => {
      this.socket.on("updateDone", (id: number) => {
        observer.next(id);
      });
      return () => { this.socket.disconnect(); };
    })
  }
}
