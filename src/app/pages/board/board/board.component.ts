import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { ToDo } from '../../../models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .cdk-drag-animate {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  todos: ToDo[] = [
    { id: 1, title: 'Buy milk' },
    { id: 2, title: 'Buy bread' },
    { id: 3, title: 'Buy cheese' },
  ];

  drop($event: CdkDragDrop<any[]>) {
    moveItemInArray(this.todos, $event.previousIndex, $event.currentIndex);
  }
}
