import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() point: number = 0;
  @Input() name: string = "";
  @Input() isSet: boolean = false;
  @Input() isVisible: boolean = false;
  @Output() onClick = new EventEmitter<number>();

  handleClick() {
    this.onClick.emit(this.point);
  }
}
