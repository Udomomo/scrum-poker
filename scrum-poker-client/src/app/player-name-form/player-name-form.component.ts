import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-name-form',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './player-name-form.component.html',
  styleUrl: './player-name-form.component.css'
})
export class PlayerNameFormComponent {
  playerName = "";
}
