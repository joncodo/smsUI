import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class MessageService {
  // private _apiUrl =  `${environment.host}:${environment.port}/api/v1/messages`;
  private _apiUrl =  ` https://young-basin-29738.herokuapp.com/sendMessage/+3124834811`;
  private url = 'http://localhost:4201';
  private socket;

  constructor(
    private _http: Http,
  ) { }

  sendMessage(message: string): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http
      .post(this._apiUrl, {message}, options)
      .toPromise()
      .then((response: any) => {
        response = response.json();
        return response;
      })
      .catch(this._handleError);
  }

  //////////

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io.connect();
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  private _handleError(err: Response) {
    err = err.json();
    console.error('An Error Occurred:', err);
    return Promise.reject(err);
  }

}
