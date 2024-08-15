import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
  ],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.css'
})
export class DeckComponent {
  points: number[] = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
}
