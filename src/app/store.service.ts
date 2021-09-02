import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ToDo } from './in-memory-data.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  state$ = new BehaviorSubject<ToDo[]>([]);

  constructor(private apiService: ApiService) {}

  getToDoList(): Observable<ToDo[]> {
    return this.apiService
      .getToDos()
      .pipe(tap((todo) => this.state$.next(todo)));
  }

  addToDoToList(todo: ToDo): Observable<ToDo> {
    this.state$.next({ ...this.state$.getValue(), ...todo });
    return this.apiService.addToDo(todo);
  }
}
