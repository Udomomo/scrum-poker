import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Card, Status } from '../models/card';
import { CommonModule } from '@angular/common';
import { SocketService } from '../socket.service';
import { DeckComponent } from '../deck/deck.component';
import { Player } from '../models/player';

@Component({
  selector: 'app-poker-table',
  standalone: true,
  imports: [
    CardComponent,
    DeckComponent,
    CommonModule,
  ],
  templateUrl: './poker-table.component.html',
  styleUrl: './poker-table.component.css'
})
export class PokerTableComponent implements OnInit {
  myId = -1;
  cardMap = new Map<number, Card>();

  @Input() myName: string = "";
  constructor(private socket: SocketService) { }

  ngOnInit(): void {
    this.socket.getName().subscribe(player => {
      console.log(`${player.name} joined`);

      // 自分自身のIDを取得。現時点では名前で判定する。
      if (this.myId === -1 && player.name === this.myName) {
        this.myId = player.id;
      }

      this.cardMap.set(player.id, { id: player.id, name: player.name, point: 0, status: Status.NOTEXIST });
    });

    this.socket.updateDone().subscribe((id) => {
      this.placeCard(id);
      console.log(`selected card`);
    })
  }

  private placeCard(id: number) {
    const card = this.cardMap.get(id)
    if (card == undefined) {
      throw new Error(`card not found: ${id}`);
    }
    card.status = Status.HIDDEN;
  }

  get upperCards() {
    return Array.from(this.cardMap.values()).sort((a, b) => a.id - b.id).filter((_, i) => i % 2 === 0);
  }

  get lowerCards() {
    return Array.from(this.cardMap.values()).sort((a, b) => a.id - b.id).filter((_, i) => i % 2 === 1);
  }

  onSelectCard(point: number) {
    this.socket.updatePoint(this.myId, point);
  }
}
