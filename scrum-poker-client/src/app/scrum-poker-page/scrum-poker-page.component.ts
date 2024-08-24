import { Component, OnInit } from '@angular/core';
import { PokerTableComponent } from "../poker-table/poker-table.component";
import { DeckComponent } from '../deck/deck.component';
import { CommonModule } from '@angular/common';
import { PlayerNameFormComponent } from '../player-name-form/player-name-form.component';
import { io } from 'socket.io-client';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-scrum-poker-page',
  standalone: true,
  imports: [
    PokerTableComponent,
    DeckComponent,
    PlayerNameFormComponent,
    CommonModule,
  ],
  templateUrl: './scrum-poker-page.component.html',
  styleUrl: './scrum-poker-page.component.css'
})
export class ScrumPokerPageComponent implements OnInit {
  myName = ""
  
  constructor(private socket: SocketService) { }

  ngOnInit(): void {
    this.socket.getName().subscribe(player => {
      console.log(`${player.name} joined`);
    });
  }

  submitName(name: string) {
    this.myName = name;
    this.socket.submitName(name);
  }

  onSelectCard(point: number) {
  }
}
