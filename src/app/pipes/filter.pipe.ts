import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../components/todo/model/todo.model';
import * as fromFilterActions from 'src/app/components/filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

    transform(todos: Todo[], filter: fromFilterActions.filtersValid): Todo[] {
        switch (filter) {
            case 'completados':
                return todos.filter(todo => todo.completed);
            case 'pendientes':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
  }

}
