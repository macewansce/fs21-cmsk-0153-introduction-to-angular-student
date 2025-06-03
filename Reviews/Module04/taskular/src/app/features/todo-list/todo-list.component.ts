import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../core/services/todos.service';
import { Todo } from '../../core/models/todo.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  addTodoForm = new FormGroup({
    task: new FormControl('',[ Validators.required, Validators.minLength(5) ]),
    ownedBy: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
  });

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.todosService.getAll().subscribe({
      next: (data) => {
        this.todos = data;
      },
      error: (err) => {
        console.log('Error in getAll () ', err);
      },
    });
  }

  addTodo() {
 

    let newTodo: Todo = this.addTodoForm.value as Todo;

    newTodo.completed = false;

    console.log(newTodo);

    this.todosService.add(newTodo).subscribe({
      next: (data) => {
        if (data) {
          this.getAll();
        }
      },
      error: (err) => {
        console.log('Error in addTodo () ', err);
      },
    });
  }
}
