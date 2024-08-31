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
    PlayerNameFormComponent,
    CommonModule,
  ],
  templateUrl: './scrum-poker-page.component.html',
  styleUrl: './scrum-poker-page.component.css'
})
export class ScrumPokerPageComponent {
  myName = "";
  
  constructor(private socket: SocketService) { }

  submitName(name: string) {
    this.myName = name;
    this.socket.submitName(name);
  }
}
