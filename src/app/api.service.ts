import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from './in-memory-data.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('api/todos');
  }

  addToDo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>('api/todos', todo);
  }
}
