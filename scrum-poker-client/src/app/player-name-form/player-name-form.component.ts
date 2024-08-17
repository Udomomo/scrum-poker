import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() onSubmit = new EventEmitter<string>();

  playerName = "";

  handleSubmit() {
    this.onSubmit.emit(this.playerName);
  }
}
