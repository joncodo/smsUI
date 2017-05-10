import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bot-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  token: number;
  private routeSubscription: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe(params => {
       this.token = params['token'];
       alert(this.token);
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
