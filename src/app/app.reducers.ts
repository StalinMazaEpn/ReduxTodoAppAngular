import { Todo } from './components/todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './components/todo/todo.reducer';
import * as fromFilter from './components/filter/filter.reducer';

import * as fromFilterActions from './components/filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filter: fromFilterActions.filtersValid;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer
}