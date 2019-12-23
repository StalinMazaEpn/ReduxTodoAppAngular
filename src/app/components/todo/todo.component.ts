import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import * as fromTodo from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    allCompleted = false;
  constructor(private store: Store<AppState>) { }

    ngOnInit() {
      
    }
    toggleAll() {
        this.allCompleted = !this.allCompleted;
        const action = new fromTodo.ToggleAllTodoAction(this.allCompleted);
        this.store.dispatch(action);
    }

}
