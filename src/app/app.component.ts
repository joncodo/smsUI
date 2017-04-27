import { Component } from '@angular/core';

import { MessageService } from './message.service';

@Component({
  selector: 'bot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  public title = 'Welcome to Botson!';
  public message: string = null;

  constructor(
    private _messageService: MessageService
  ) {}

  public sendMessage(): void {
    this._messageService.sendMessage()
      .then((res) => {
        this.message = res.message;
      });
  }
}
