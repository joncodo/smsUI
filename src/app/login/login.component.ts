import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { LoginService } from '../loginService/login-service.service';

@Component({
  selector: 'bot-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  private token: number;
  private routeSubscription: any;
  public username = '';
  public password = '';

  constructor(private route: ActivatedRoute, private _http: Http, private loginService: LoginService) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe(params => {
       this.token = params['token'];
       console.log("hub token", this.token);
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  login(username: string, password: string) {
    var _apiUrl =  `https://young-basin-29738.herokuapp.com/login`;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.loginService.username = username;
    this.loginService.token = this.token;
    this._http.post(_apiUrl, {
      username: username,
      hubLoginToken: this.token,
      password: password
    }, options)
    .toPromise()
    .then((response: any) => {
      window.location.href = response.json().url;
    })
    .catch(this._handleError);
  }

  public onSubmit(): void {
    this.login(this.username, this.password);
    this.username = '';
    this.password = '';
  }

  private _handleError(err: Response) {
    err = err.json();
    console.error('An Error Occurred:', err);
  }

}
