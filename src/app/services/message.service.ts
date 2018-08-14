import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Message} from '../classes/Message';
import {map} from 'rxjs/operators';

import { BehaviorSubject, Observable } from 'rxjs';
import {Update} from '../classes/Update';
import {UpdateService} from './update.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages = [];
  private sourceMessages = new BehaviorSubject<Message[]>(this.messages);

  public messages$ = this.sourceMessages.asObservable();

  constructor(
    protected updateService: UpdateService,
  ) {

    this.updateService.newUpdates$.subscribe(newUpdates => {
      let someNewMessage = false;

      newUpdates.forEach(newUpdate => {
        if (newUpdate.get_message() !== null) {
          someNewMessage = true;
          this.messages.push(newUpdate.get_message());
        }
      });

      if (someNewMessage) {
        this.sourceMessages.next(this.messages);
      }
    });
  }

}
