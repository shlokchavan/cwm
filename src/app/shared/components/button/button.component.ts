import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ct-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() role!: string;
  @Input() disabled!: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.role = 'primary';
    this.disabled = false;
  }

  handleClick(event: any) {
    this.onClick.emit(event);
  }
}
