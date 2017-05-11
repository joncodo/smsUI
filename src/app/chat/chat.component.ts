import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';
import { CookieService } from 'ng2-cookies';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'bot-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.styl']
})
export class ChatComponent implements OnInit, OnDestroy {

  public showIntro = true;
  public messages = [];
  public userMessage = '';
  public subscription: Subscription;
  private socketConnection;
  private routeSubscription: any;
  private to: string;
  private from: string;

  constructor(
    private _messageService: MessageService,
    private route: ActivatedRoute,
    public cookieService: CookieService
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe(params => {
       this.to = params['to'];
       console.log("outbound number is ", this.to);
    });

    this.socketConnection = this._messageService.getMessages().subscribe(message => {
      console.log("message received from socket", message);
      this._addMessage(message.text.body, 'User: ' + message.text.finalSource);
    })
    this.from = this.cookieService.get('username');
    this._messageService.createHook(this.from)
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.error(err);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  ////////////

  private _addMessage(message, person): void {
    this.messages.push({
      'value': message,
      'person': person,
      'position': '',
      'timestamp': `${moment().format('h:mm A')}`
    });

    const lastIndex = this.messages.length - 1;
    this.messages[lastIndex].position = this.checkPosition(lastIndex);
  }

  public sendMessage(message): void {
    this._addMessage(message, 'user');
    this.from = this.cookieService.get('username');
    this._messageService.sendMessage(message, this.from, this.to)
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.error(err);
      });
  }

  public onSubmit(): void {
    this.sendMessage(this.userMessage);
    this.userMessage = '';
  }

  public checkPosition(index): string {
    if (index === 0) {
      this.messages[index].position = 'first';
      return 'first';
    }

    const previousPerson = this.messages[index - 1].person;
    const currentPerson = this.messages[index].person;
    let nextPerson;
    if (index !== this.messages.length - 1) {
      nextPerson = this.messages[index + 1].person;
    }

    if (previousPerson === currentPerson) {
      if (nextPerson && nextPerson === currentPerson) {
        this.messages[index].position = 'middle';
        return 'middle';
      } else {
        this.messages[index].position = 'last';
        return 'last';
      }
    } else {
      this.messages[index].position = 'first';
      return 'first';
    }
  }

}
