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
      'message': 'What\'s the weather in New York, NY?',
      'value': 'What\'s the weather in New York, NY?',
      'disabled': false
    },
    {
      'message': 'Remind me to call ___________ in ___________ minutes',
      'value': 'Remind me to call Joe Baird in 10 minutes',
      'disabled': false
    },
    {
      'message': 'Show me a gif of ___________',
      'value': 'Show me a gif of a kitten',
      'disabled': false
    },
    {
      'message': 'Schedule a meeting with ___________',
      'value': 'Schedule a meeting with Joe',
      'disabled': true
    },
    {
      'message': 'Let me know when ___________ is available',
      'value': 'Let me know when Joe is available',
      'disabled': true
    },
    {
      'message': 'What are the most recent Google files I worked on?',
      'value': 'What are the most recent Google files I worked on?',
      'disabled': true
    },
    {
      'message': 'Show me emails from ___________',
      'value': 'Show me emails from Joe',
      'disabled': true
    },
    {
      'message': 'Will bots take over the world?',
      'value': 'Will bots take over the world?',
      'disabled': true
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
      'message': this.actions[index].value
    });
  }

}
