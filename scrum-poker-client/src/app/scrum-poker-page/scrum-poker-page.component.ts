import { Component } from '@angular/core';
import { PokerTableComponent } from "../poker-table/poker-table.component";

@Component({
  selector: 'app-scrum-poker-page',
  standalone: true,
  imports: [PokerTableComponent],
  templateUrl: './scrum-poker-page.component.html',
  styleUrl: './scrum-poker-page.component.css'
})
export class ScrumPokerPageComponent {

}
