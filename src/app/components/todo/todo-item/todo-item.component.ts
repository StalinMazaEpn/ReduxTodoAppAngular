import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

    @Input() todo: Todo;
    @ViewChild('txtInputFisical') txtInputFisical: ElementRef;
    checkField: FormControl;
    txtInput: FormControl;
    editing: boolean;

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.checkField = new FormControl(this.todo.completed);
        this.txtInput = new FormControl(this.todo.text, Validators.required);

        this.checkField.valueChanges.subscribe(() => {
            const action = new fromTodo.ToggleTodoAction(this.todo.id);
            this.store.dispatch(action);
        })
    }

    edit() {
        this.editing = true;
        setTimeout(() => {
            this.txtInputFisical.nativeElement.select();
        }, 1);
    }

    endEdit() {
        this.editing = false;
        const action = new fromTodo.EditTodoAction(this.todo.id, this.txtInput.value);
        this.store.dispatch(action);
    }

    deleteTodo() {
        const action = new fromTodo.DeleteTodoAction(this.todo.id);
        this.store.dispatch(action);
    }

}
