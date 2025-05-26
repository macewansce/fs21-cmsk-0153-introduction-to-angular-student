import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../core/services/todos.service';
import { Todo } from '../../core/models/todo.model';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit{

  todos: Todo[] = [];
  
  constructor(private todosService: TodosService) {
    
  }
   ngOnInit(): void {
    this.todosService.getAll().subscribe(
      {
        next: (data) => {
          this.todos =  data;
        },
        error: (err) => {
          console.log('Error in getAll () ', err)
        }
      }
    );

  }

}
