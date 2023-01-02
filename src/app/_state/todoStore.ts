import { Injectable } from '@angular/core';
import { StoreConfig, EntityState, EntityStore } from '@datorama/akita';
import { Todo } from './todoTypes';
import { FilterValue } from '../components/filters/filter.model';

export interface TodosState extends EntityState<Todo, string> {
  ui: {
    filter: FilterValue;
  };
}

const initialState: TodosState = {
  ui: {
    filter: 'SHOW_ALL',
  },
};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super(initialState);
  }
}
