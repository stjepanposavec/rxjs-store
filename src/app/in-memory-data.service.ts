import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface ToDo {
  id: string;
  todo: string;
}

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: ToDo[] = [{ id: '1', todo: 'test' }];
    return { todos };
  }
}
