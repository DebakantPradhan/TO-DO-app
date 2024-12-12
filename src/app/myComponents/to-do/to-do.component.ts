import { Component, Input } from '@angular/core';
import { Todo } from '../../../models/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  
  
  todoTitle: string = "";
  @Input() todosList: Todo[] = [];
  
  addItem() {
    if (this.todoTitle.trim()) {
      const newItem: Todo = {
        slNo: this.todosList.length + 1,
        title: this.todoTitle,
        desc: "",
        active: false
      };
      this.todosList.push(newItem);
    }
    this.todoTitle = "";
  }

  constructor() {}
}
