import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { TodosService } from '../../_state/todoService';
import { TodosQuery } from '../../_state/todoQuery';
import { Todo } from '../../_state/todoTypes';
import { initialFilters, FilterValue } from '../filters/filter.model';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
})
export class TodosPageComponent {
  readonly filters = initialFilters;

  readonly todos$: Observable<Todo[]> = this.query.selectVisibleTodos$;
  readonly activeFilters$: Observable<FilterValue> =
    this.query.selectVisibleFilter$;

  constructor(private service: TodosService, private query: TodosQuery) {}

  addTodo(input: HTMLInputElement) {
    if (input.value != '') this.service.addTodo(input.value);
    input.value = '';
  }

  completeTodo(todo: Todo) {
    this.service.completeTodo(todo);
  }

  deleteTodo(id: string) {
    this.service.deleteTodo(id);
  }

  changeTodoFilter(filter: FilterValue) {
    console.log(filter);
    this.service.updateTodoFilter(filter);
  }
}
