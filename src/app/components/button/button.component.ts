import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {

  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: string = 'primary';

  getButtonClass() {
    return {
      'text-white': this.color !== 'gray-light',
      'text-gray-800': this.color === 'gray-light',
      'bg-blue-700 hover:bg-blue-800': this.color === 'primary',
      'bg-green-700 hover:bg-green-800': this.color === 'success',
      'bg-gray-700 hover:bg-gray-800': this.color === 'gray',
      'bg-gray-200 hover:bg-gray-300': this.color === 'gray-light',
    };
  }
}
