import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() point: number = 0;
  @Input() name: string = "";
  @Output() onClick = new EventEmitter<number>();

  handleClick() {
    this.onClick.emit(this.point);
  }
}
