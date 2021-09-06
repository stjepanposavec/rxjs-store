import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface ToDo {
  id: number;
  todo: string;
}

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let todos: ToDo[] = [{ id: 1, todo: 'test' }];
    return { todos };
  }
}
