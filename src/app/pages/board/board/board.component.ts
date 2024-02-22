import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Column, ToDo } from '../../../models/todo.model';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../../components/todo-dialog/todo-dialog.component';

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

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
        border-radius: 4px;
      }

      ::-webkit-scrollbar-track {
        background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
      }
    `,
  ],
})
export class BoardComponent {
  taskInputs: { [key: string]: string } = {};

  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        { id: 1, title: 'Buy milk' },
        { id: 2, title: 'Buy bread' },
        { id: 3, title: 'Buy cheese' },
      ],
    },
    {
      title: 'Doing',
      todos: [
        { id: 4, title: 'Make pizza' },
        { id: 5, title: 'Make salad' },
        { id: 6, title: 'Eat pizza' },
      ],
    },
    {
      title: 'Done',
      todos: [
        { id: 7, title: 'Eat salad' },
        { id: 8, title: 'Do the dishes' },
        { id: 9, title: 'Go to bed' },
      ],
    },
  ];

  constructor(private dialog: Dialog) {}

  drop($event: CdkDragDrop<ToDo[]>) {
    if ($event.previousContainer === $event.container) {
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    } else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
  }

  dropColumn($event: CdkDragDrop<Column[]>) {
    moveItemInArray(this.columns, $event.previousIndex, $event.currentIndex);
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }

  addTask(column: Column) {
    const columnTask = this.columns.find((c) => c === column);

    if (columnTask) {
      columnTask.todos.push({
        id: columnTask.todos.length + 1,
        title: this.taskInputs[column.title].trim(),
      });
    }

    this.taskInputs[column.title] = '';
  }

  openDialog(toDo: ToDo) { 
   const dialogRef =  this.dialog.open(TodoDialogComponent, {
      width: '50%',
      height: 'auto',
      autoFocus: false,
      data: {
        task: toDo,
      },
    });

    dialogRef.closed.subscribe((result) => {
      console.log('Dialog was closed', result);
    });
  }
}
