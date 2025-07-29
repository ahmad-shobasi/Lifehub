import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calendar-form',
  imports: [MatCardModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './calendar-form.html',
  styleUrl: './calendar-form.scss',
})
export class CalendarForm {
  eventForm: FormGroup;
  _FormBuild = inject(FormBuilder);
  @Output() updateEventList = new EventEmitter();
  constructor() {
    this.eventForm = this._FormBuild.group({
      eventTitle: ['', Validators.required],
      start: ['', Validators.required],
      end: [''],
    });
  }

  get form() {
    return this.eventForm.controls;
  }

  createEvent(form: FormGroup) {
    console.log(form);

    if (form.valid) {
      this.updateEventList.emit(form);
      this.eventForm.reset();
    } else {
      alert('fill event form !');
    }
  }
}
