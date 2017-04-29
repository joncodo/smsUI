import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'bot-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.styl']
})
export class IntroComponent implements OnInit {
  @ViewChild('content') contentElement;

  @Output()
  public closeClick = new EventEmitter();

  public message: string = null;
  public actions = [
    {
      'message': 'What\'s the weather in New York, NY?'
    },
    {
      'message': 'Schedule a meeting with ___________'
    },
    {
      'message': 'Let me know when ___________ is available'
    },
    {
      'message': 'What are the most recent Google files I worked on?'
    },
    {
      'message': 'Show me emails from ___________'
    },
    {
      'message': 'Will bots take over the world?'
    },
    {
      'message': 'Remind me to call ___________ in ___________ minutes'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, target: HTMLElement): void {
    if (!target) {
      return;
    } else if (!this.contentElement.nativeElement.contains(target)) {
      this.closeClick.emit({
        'doClose': true,
        'message': null
      });
    }
  };

  public sendMessage(index): void {
    this.closeClick.emit({
      'doClose': true,
      'message': this.actions[index].message
    });
  }

}
