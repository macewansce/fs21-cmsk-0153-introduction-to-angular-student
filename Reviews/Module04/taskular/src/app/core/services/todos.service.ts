import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  readonly baseUrl: string = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }

  add(todo: Todo): Observable<any> {
    return this.httpClient.post(this.baseUrl, todo);
  }
}
