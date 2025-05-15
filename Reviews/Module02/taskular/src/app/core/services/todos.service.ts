import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos: Todo[] = [
    {
      id: 1,
      task: 'Do assignment #1',
      ownedBy: 'Hammad Tawfig',
      completed: true,
    },
    {
      id: 2,
      task: 'Mark assignment #1',
      ownedBy: 'Hammad Tawfig',
      completed: false,
    },
    {
      id: 3,
      task: 'Do assignment #1',
      ownedBy: 'Hammad Tawfig',
      completed: true,
    },
    {
      id: 4,
      task: 'Mark assignment #1',
      ownedBy: 'Hammad Tawfig',
      completed: false,
    },
    {
      id: 5,
      task: 'Do assignment #1',
      ownedBy: 'Hammad Tawfig',
      completed: true,
    },
    {
      id: 6,
      task: 'Mark assignment #1',
      ownedBy: 'Hammad Tawfig',
      completed: false,
    },
    {
      id: 7,
      task: 'Do assignment #1',
      ownedBy: 'Hammad Tawfig',
      completed: true,
    },
    {
      id: 8,
      task: 'Mark assignment #1',
      ownedBy: 'Hammad Tawfig',
      completed: false,
    },
  ];

  constructor() {}

  getAll(): Todo[] {
    return this.todos;
  }
}
