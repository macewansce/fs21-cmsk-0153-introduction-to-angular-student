import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos = [
    { task: 'Do assignment #1', ownedBy: 'Hammad Tawfig', completed: true },
    { task: 'Mark assignment #1', ownedBy: 'Hammad Tawfig', completed: false },
  ];
}
