import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Card, Status } from '../models/card';
import { CommonModule } from '@angular/common';
import { SocketService } from '../socket.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-poker-table',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
  ],
  templateUrl: './poker-table.component.html',
  styleUrl: './poker-table.component.css'
})
export class PokerTableComponent implements OnInit {
  cardMap = new Map<number, Card>();

  constructor(private socket: SocketService) { }

  ngOnInit(): void {
    this.socket.getName().subscribe(player => {
      console.log(`${player.name} joined`);
      this.cardMap.set(player.id, { id: player.id, name: player.name, point: 0, status: Status.NOTEXIST });
    });

    this.socket.updateDone().subscribe((arg) => {
      this.updatePoint(arg.id, arg.point);
      console.log(`selected card`);
    })
  }

  private updatePoint(id: number, point: number) {
    const card = this.cardMap.get(id)
    if (card == undefined) {
      throw new Error(`card not found: ${id}`);
    }
    card.point = point;
    card.status = Status.HIDDEN;
  }

  get upperCards() {
    return Array.from(this.cardMap.values()).sort((a, b) => a.id - b.id).filter((_, i) => i % 2 === 0);
  }

  get lowerCards() {
    return Array.from(this.cardMap.values()).sort((a, b) => a.id - b.id).filter((_, i) => i % 2 === 1);
  }
}
