import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';

@Injectable()
export class MessageService {
  private _apiUrl =  `${environment.host}:${environment.port}/api/v1/messages`;

  constructor(
    private _http: Http
  ) { }

  sendMessage(): Promise<any> {
    return this._http
      .post(this._apiUrl, {})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  handleError(e: any) {
    console.error('An Error Occurred:', e);
    return Promise.reject(e.message || e);
  }

}
