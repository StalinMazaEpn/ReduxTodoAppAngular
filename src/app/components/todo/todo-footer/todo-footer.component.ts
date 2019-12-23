import { Component, OnInit } from '@angular/core';
import * as fromFilterActions from 'src/app/components/filter/filter.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import * as fromTodo from 'src/app/components/todo/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

    filtersValid: fromFilterActions.filtersValid[] = ['todos', 'pendientes', 'completados'];
    currentFilter: fromFilterActions.filtersValid;
    pendents: number;

  constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.store.subscribe(state => {
            this.currentFilter = state.filter;
            this.countPendents(state.todos);
        });
  }
    
  changeFilter(newFilter: fromFilterActions.filtersValid) {
        const action = new fromFilterActions.SetFilterAction(newFilter);
        this.store.dispatch(action);
  }
    
  countPendents(todos: Todo[]) {
        this.pendents = todos.filter(todo => !todo.completed).length;
  }
    
    allTodoCompleted() {
        const action = new fromTodo.DeleteAllCompletedTodoAction();
        this.store.dispatch(action);
  }

}
