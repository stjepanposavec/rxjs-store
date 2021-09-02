import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscriptons$!: Subscription;

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.subscriptons$ = this.store.getToDoList().subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptons$.unsubscribe();
  }
}
