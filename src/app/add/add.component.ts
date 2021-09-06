import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-add',
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="onClickAdd()">
      <input type="text" formControlName="todo" />
      <button>Add</button>
    </form>
  `,
  styles: [],
})
export class AddComponent implements OnInit, OnDestroy {
  subscriptions!: Subscription;

  constructor(private fb: FormBuilder, private store: StoreService) {}

  todoForm = this.fb.group({
    todo: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  onClickAdd() {
    this.subscriptions = this.store
      .addToDoToList({ id: 2, todo: this.todoForm.get('todo')?.value })
      .subscribe();
    this.todoForm.get('todo')?.setValue('');
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
