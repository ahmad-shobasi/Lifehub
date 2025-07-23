import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { TasksForm } from '../../shared/components/tasks-form/tasks-form';
import {
  TaskCard,
  TaskCardModel,
} from '../../shared/components/task-card/task-card';
import { AbstractControl } from '@angular/forms';
import { PriorityEnum } from '../../shared/components/priority/priority';

@Component({
  selector: 'app-tasks',
  imports: [Header, TasksForm, TaskCard],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  tasksList: TaskCardModel[] = [
    {
      title: 'new Task',
      description: 'description of test task ',
      priority: PriorityEnum.InProgress,
    },
  ];
  createTask(form: { [key: string]: AbstractControl<any, any, any> }) {
    const priorityValues = [
      PriorityEnum.Todo,
      PriorityEnum.InProgress,
      PriorityEnum.Overdue,
      PriorityEnum.Done,
    ];
    const priorityIndex = form['taskPriority'].value - 1;

    const data: TaskCardModel = {
      title: form['taskTitle'].value,
      description: form['description'].value,
      priority: priorityValues[priorityIndex],
      // deleteTask: ()=> this.deleteTaskCard(1),
    };
    this.tasksList.push(data);
  }

  deleteTaskCard(id: number) {
    const index = this.tasksList.findIndex((card) => card.id === id);
    this.tasksList.slice(0, index);
  }
}
