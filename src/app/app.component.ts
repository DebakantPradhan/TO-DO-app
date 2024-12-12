import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './myComponents/to-do/to-do.component';
import { Todo } from '../models/todo.model';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToDoComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TO-DO-app';

  todos: Todo[] = [];

  ngOnInit() {
    this.todos = [];
  }
}
