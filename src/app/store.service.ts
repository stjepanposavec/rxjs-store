import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ToDo } from './in-memory-data.service';
import { StateService } from './store';

interface ToDoState {
  todos: ToDo[];
}

const initialState: ToDoState = {
  todos: [],
};

@Injectable({
  providedIn: 'root',
})
export class StoreService extends StateService<ToDoState> {
  todos$: Observable<ToDo[]> = this.select((state) => state.todos);

  constructor(private apiService: ApiService) {
    super(initialState);
  }

  addToDoToList(todo: ToDo): Observable<ToDo> {
    this.setState({ todos: [...this.state.todos, todo] });
    return this.apiService.addToDo(todo);
  }

  getToDoList(): Observable<ToDo[]> {
    return this.apiService
      .getToDos()
      .pipe(tap((todos) => this.setState({ todos: todos })));
  }
}
