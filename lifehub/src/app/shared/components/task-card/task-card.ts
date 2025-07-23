import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Priority, PriorityEnum } from '../priority/priority';

export interface TaskCardModel {
  id?: number;
  title?: string;
  description?: string;
  priority?: PriorityEnum;
  deleteTask?: (id: number) => {};
}

@Component({
  selector: 'app-task-card',
  imports: [MatCardModule, Priority],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  @Input() card: TaskCardModel = {};
}
