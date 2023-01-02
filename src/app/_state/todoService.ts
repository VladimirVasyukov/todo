import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';
import { TodosStore } from './todoStore';
import { Todo } from './todoTypes';
import { FilterValue } from '../components/filters/filter.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private todosStore: TodosStore) {}

  addTodo(title: string) {
    const todo = this.createNewTodo(title);
    this.todosStore.add(todo);
  }

  completeTodo({ id, isCompleted }: Todo) {
    this.todosStore.update(id, { isCompleted });
  }

  deleteTodo(id: string) {
    this.todosStore.remove(id);
  }

  updateTodoFilter(filter: FilterValue) {
    this.todosStore.update({
      ui: {
        filter,
      },
    });
  }

  private createNewTodo(title: string) {
    return {
      id: guid(),
      isCompleted: false,
      title,
    } as Todo;
  }
}
