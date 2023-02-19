import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Todo } from '../../_state/todoTypes';

@Component({
  selector: 'app-todos',
  template: `
    <app-todo
      *ngFor="let todo of todos"
      [todo]="todo"
      (complete)="complete.emit($event)"
      (delete)="delete.emit($event)"
    >
    </app-todo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  @Input() todos: Todo[] | null;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();
}
