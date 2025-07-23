import { Component, Input } from '@angular/core';
export enum PriorityEnum {
  Todo = 'to-do',
  InProgress = 'in progress',
  Overdue = 'overdue',
  Done = 'done',
}
@Component({
  selector: 'app-priority',
  imports: [],
  template: `
    <div
      class="txt-{{ generateColor(PriorityMode) }} p-2 m-0 alert alert-{{
        generateColor(PriorityMode)
      }}"
    >
      {{ PriorityMode }}
    </div>
  `,
  styleUrl: './priority.scss',
})
export class Priority {
  @Input() PriorityMode: PriorityEnum = PriorityEnum.Todo;

  generateColor(P: PriorityEnum) {
    switch (P) {
      case PriorityEnum.Done:
        return 'success';
      case PriorityEnum.Overdue:
        return 'danger';
      case PriorityEnum.InProgress:
        return 'warning';
      case PriorityEnum.Todo:
        return 'primary';
    }
  }
}
