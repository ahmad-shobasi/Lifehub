import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarModule } from 'angular-calendar';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { addHours } from 'date-fns';
import { CalendarForm } from '../../shared/components/calendar-form/calendar-form';
import { Header } from '../../shared/components/header/header';

@Component({
  selector: 'app-calendar',
  imports: [CalendarModule, CalendarForm, Header],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  events: CalendarEvent[] = [
    {
      start: addHours(new Date(), 2),
      title: 'LifeHub Kickoff',
      color: { primary: '#007ACC', secondary: '#D1E8FF' },
    },
    {
      start: new Date(),
      title: 'Team Sync',
      color: { primary: '#e74c3c', secondary: '#FADBD8' },
    },
  ];

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  setView(view: CalendarView) {
    this.view = view;
  }
}
