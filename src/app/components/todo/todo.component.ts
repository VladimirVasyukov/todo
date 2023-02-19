import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo } from '../../_state/todoTypes';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() todo: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();

  control: FormControl;
  checked: boolean;
  subscription$: Subscription;

  ngOnInit() {
    this.control = new FormControl(this.todo.isCompleted);

    this.subscription$ = this.control.valueChanges.subscribe(
      (isCompleted: boolean) => {
        this.complete.emit({ ...this.todo, isCompleted });
      }
    );
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
