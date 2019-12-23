import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as fromFilterActions from 'src/app/components/filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

    todos: Todo[] = [];
    currentFilter: fromFilterActions.filtersValid;
    
    ngOnInit() {
        this.store.subscribe(state => {
            this.todos = state.todos;
            this.currentFilter = state.filter;
      })
  }

}
