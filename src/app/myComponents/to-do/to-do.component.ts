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
  
  todoDesc: string = "";
  todoTitle: string = "";
  @Input() todosList: Todo[] = [];
  
  addItem() {
    if (this.todoTitle.trim()) {
      const newItem: Todo = {
        slNo: this.todosList.length + 1,
        title: this.todoTitle,
        desc: this.todoDesc,
        active: false
      };
      this.todosList.push(newItem);
    }
    this.todoTitle = "";
    this.todoDesc = "";
  }

  deleteItem(index: number) {
    this.todosList = this.todosList.filter((item) => item.slNo !== index);
  }

  constructor() {}
}
