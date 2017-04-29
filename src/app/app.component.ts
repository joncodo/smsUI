import { Component, Input } from '@angular/core';

import { MessageService } from './message.service';

@Component({
  selector: 'bot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  public title = 'Welcome to Botson!';
  public showIntro = true;
  public messages = [];

  constructor(
    private _messageService: MessageService
  ) { }

  public sendMessage(message): void {
    this._messageService.sendMessage(message)
      .then((res) => {
        this.messages.push({
          'value': res.message,
          'person': 'bot'
        });
      });
  }

  public closeClick(event): void {
    if (event.doClose === true) {
      this.showIntro = false;
    }

    if (event.message !== null) {
      this.sendMessage(event.message);
      this.messages.push({
        'value': event.message,
        'person': 'user'
      });
    }
  }
}
