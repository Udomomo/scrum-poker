import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrumPokerPageComponent } from "./scrum-poker-page/scrum-poker-page.component";
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrumPokerPageComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scrum-poker-client';
}
