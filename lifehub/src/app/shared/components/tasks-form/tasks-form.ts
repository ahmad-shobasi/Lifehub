import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tasks-form',
  imports: [MatCardModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './tasks-form.html',
  styleUrl: './tasks-form.scss',
})
export class TasksForm {
  taskForm: FormGroup;
  _FormBuilder = inject(FormBuilder);
  @Output() updateTaskList = new EventEmitter();
  constructor() {
    this.taskForm = this._FormBuilder.group({
      taskTitle: ['', Validators.required],
      description: ['', Validators.required],
      taskPriority: ['', Validators.required],
    });
  }

  get form() {
    return this.taskForm.controls;
  }
  createTask(form: FormGroup) {
    if (this.taskForm.valid) {
      this.updateTaskList.emit(form);
      this.taskForm.reset();
    } else {
      alert('fill task form !');
    }
  }
}
