import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnChanges {

  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: string = 'primary';
  classButton: string = '';

  ngOnChanges(changes: SimpleChanges) {
    const color: SimpleChange = changes['color']?.currentValue;

    if (color) {
      this.classButton = `bg-${this.color}-700 hover:bg-${this.color}-800`;
      console.log(this.classButton);
    }
  }
}
