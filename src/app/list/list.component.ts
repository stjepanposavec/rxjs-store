import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let todo of store.todos$ | async">{{ todo.todo }}</li>
    </ul>
  `,
  styles: [],
})
export class ListComponent implements OnInit, OnDestroy {
  subscriptions!: Subscription;

  constructor(public store: StoreService) {}

  ngOnInit() {
    this.subscriptions = this.store.getToDoList().subscribe();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
