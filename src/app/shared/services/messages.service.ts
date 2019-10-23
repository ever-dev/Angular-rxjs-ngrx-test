import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Message } from '../../ngrx/models/Message.model';

const dummyMessages: Message[] = [
  { from: 'user1', message: 'Message1'},
  { from: 'user2', message: 'Message2'},
  { from: 'user3', message: 'Message3'},
  { from: 'user1', message: 'Message4'},
  { from: 'user2', message: 'Message5'},
  { from: 'user3', message: 'Message6'},
  { from: 'user1', message: 'Message7'},
  { from: 'user2', message: 'Message8'},
  { from: 'user3', message: 'Message9'},
  { from: 'user1', message: 'Message10'},
  { from: 'user2', message: 'Message11'},
  { from: 'user3', message: 'Message12'},
];

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  searchMessages(keyword: string): Observable<Message[]> {
    return of(dummyMessages.filter(message => (message.from + message.message).includes(keyword)));
  }
}
