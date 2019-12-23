import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as fromTodo from 'src/app/components/todo/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

    txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.txtInput = new FormControl('', Validators.required);
    }
    
    addTodo() {
        if (this.txtInput.invalid) {
            return;
        }
        const action = new fromTodo.AddTodoAction(this.txtInput.value);
        this.store.dispatch(action);
        this.txtInput.reset();
    }

}
