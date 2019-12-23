import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
    declarations: [
        TodosListComponent,
        TodoItemComponent,
        TodoFooterComponent,
        TodoAddComponent,
        TodoComponent,
        FilterPipe
  ],
  imports: [
      CommonModule,
      ReactiveFormsModule
    ],
    exports: [
        TodosListComponent,
        TodoItemComponent,
        TodoFooterComponent,
        TodoAddComponent,
        TodoComponent
  ]
})
export class TodoModule { }
