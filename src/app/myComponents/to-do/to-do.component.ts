import { Component } from '@angular/core';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrls : ['./to-do.component.css']
})
export class ToDoComponent {

  todos: Todo[] = [];
  constructor() { 
    this.todos = [
      {
        slNo: 1,
        title: 'Todo 1',
        desc: 'Description 1',
        active: true
      },
      {
        slNo: 2,
        title: 'Todo 2',
        desc: 'Description 2',
        active: true
      },
      {
        slNo: 3,
        title: 'Todo 3',
        desc: 'Description 3',
        active: false
      }
    ]
  }
}
