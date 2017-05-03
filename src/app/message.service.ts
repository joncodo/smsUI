import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Reminder } from './reminder/reminder';
import { ReminderService } from './reminder/reminder.service';
import { environment } from '../environments/environment';

@Injectable()
export class MessageService {
  private _apiUrl =  `${environment.host}:${environment.port}/api/v1/messages`;

  constructor(
    private _http: Http,
    private _reminderService: ReminderService
  ) { }

  sendMessage(message: string): Promise<any> {
    return this._http
      .post(this._apiUrl, {message: message})
      .toPromise()
      .then((response: any) => {
        response = response.json();
        if (response.reminder) {
          this._handleReminder(response.reminder);
        }
        return response;
      })
      .catch(this._handleError);
  }

  //////////

  private _handleReminder(reminder: Reminder): void {
    this._reminderService.setReminder(reminder);
  }

  private _handleError(err: Response) {
    err = err.json();
    console.error('An Error Occurred:', err);
    return Promise.reject(err);
  }

}
