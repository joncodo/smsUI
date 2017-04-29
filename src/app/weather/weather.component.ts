import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'bot-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.styl']
})
export class WeatherComponent implements OnInit {
  public message: string = null;

  constructor(
    private _messageService: MessageService
  ) {}

  public sendMessage(): void {
    this._messageService.sendMessage('What\'s the weather in Dallas, TX?')
      .then((res) => {
        this.message = res.message;
      });
  }

  ngOnInit() {
  }

}
