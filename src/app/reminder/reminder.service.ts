import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Reminder } from './reminder';

@Injectable()
export class ReminderService {
  private _reminders: Reminder[] = [];
  private _subject: Subject<string> = new Subject<string>();

  constructor() {
    setInterval(() => {
      let count = 0;
      for (const reminder of this._reminders) {
        if (moment().isSameOrAfter(moment.unix(reminder.time))) {
          this._subject.next(reminder.message);
          count++;
        } else {
          break;
        }
      }

      this._reminders.splice(0, count);
    }, 1000);
  }

  public getObservable(): Observable<string> {
    return this._subject.asObservable();
  }

  public setReminder(reminder: Reminder): void {
    this._reminders.splice(_.sortedIndexBy(this._reminders, reminder, 'time'), 0, reminder);
  }

}
