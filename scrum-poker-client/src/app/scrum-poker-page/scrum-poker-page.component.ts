import { Component } from '@angular/core';
import { PokerTableComponent } from "../poker-table/poker-table.component";
import { DeckComponent } from '../deck/deck.component';
import { CommonModule } from '@angular/common';
import { PlayerNameFormComponent } from '../player-name-form/player-name-form.component';
import { io } from 'socket.io-client';

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
export class ScrumPokerPageComponent {
  myName = ""
  // TODO: effectに独立させて使い回す
  socket = io("http://localhost:3000");

  submitName(name: string) {
    this.myName = name;
    this.socket.emit("join", name);
  }
}
