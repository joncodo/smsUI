import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { LoginService } from '../loginService/login-service.service';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class MessageService {
  private socket;

  constructor(
    private _http: Http,
    private loginService: LoginService
  ) { }

  sendMessage(message: string, from: string, to: string): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http
      .post(`${environment.host}/sendMessage`, {message, from, to}, options)
      .toPromise()
      .then((response: any) => {
        response = response.json();
        return response;
      })
      .catch(this._handleError);
  }

  createHook(username: string): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http
      .post(`${environment.host}/createWebhook`, {url: environment.webHook, username: username}, options)
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

  private _handleError(err) {
    err = err.json();
    console.error('An Error Occurred:', err);
    return Promise.reject(err);
  }

}
