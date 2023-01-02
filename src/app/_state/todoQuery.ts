import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { QueryEntity } from '@datorama/akita';
import { TodosState, TodosStore } from './todoStore';
import { Todo } from './todoTypes';
import { FilterValue } from '../components/filters/filter.model';

@Injectable({
  providedIn: 'root',
})
export class TodosQuery extends QueryEntity<TodosState> {
  selectVisibleFilter$ = this.select((state) => state.ui.filter);

  selectVisibleTodos$: Observable<Todo[]> = combineLatest([
    this.selectVisibleFilter$,
    this.selectAll(),
  ]).pipe(
    map(([filter, allEntities]) => {
      return this.getVisibleTodos(filter, allEntities);
    })
  ) as Observable<Todo[]>;

  constructor(protected override store: TodosStore) {
    super(store);
  }

  getVisibleTodos(filter: FilterValue, todos: Todo[]): Todo[] {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter((t) => t.isCompleted);
      case 'SHOW_ACTIVE':
        return todos.filter((t) => !t.isCompleted);
      default:
        return todos;
    }
  }
}
