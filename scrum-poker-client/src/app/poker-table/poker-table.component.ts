import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Card, Status } from '../models/card';
import { CommonModule } from '@angular/common';

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
export class PokerTableComponent {
  upperCards: Card[] = [
    { status: Status.VISIBLE, point: 1, name: "John" },
    { status: Status.HIDDEN, point: 2, name: "Jack" },
    { status: Status.VISIBLE, point: 1, name: "Jessy" },
  ]
  lowerCards: Card[] = [
    { status: Status.HIDDEN, point: 3, name: "Ben" },
    { status: Status.VISIBLE, point: 1, name: "Katy" },
    { status: Status.VISIBLE, point: 2, name: "Michel" },
  ]
}
