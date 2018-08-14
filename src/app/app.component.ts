import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from './services/message.service';
import {Subscription} from 'rxjs';
import {Message} from './classes/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    this.messagesSubscription = this.messageService.messages$.subscribe(messages => {
      this.messages = messages;
      console.log('Here in appComponent OnInit');
      console.log(this.messages);
    });
  }

  ngOnDestroy(): void {
    this.messagesSubscription.unsubscribe();
  }

  private messagesSubscription: Subscription;
  public messages: Message[];

  constructor(
    private messageService: MessageService,
  ) {}

}
