import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../_state/todoTypes';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos: Todo[] | null;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();
}
