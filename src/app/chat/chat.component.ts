import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';

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

  constructor(private _messageService: MessageService) {

  }

  ngOnInit() {
    this.socketConnection = this._messageService.getMessages().subscribe(message => {
      console.log("message received from socket", message);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

    this._messageService.sendMessage(message)
      .then((res) => {
        // this._addMessage(res.message, 'bot');

        // switch (res.type) {
        //   case 'direct_gif': this._addMessage(`<img src='${res.link}' />`, 'bot'); break;
        //   case 'hyperlink': this._addMessage(`<a href='${res.link}'>${res.link}</a>`, 'bot'); break;
        // }
      }, (err) => {
        // this._addMessage(err.errorMessage, 'bot');
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
