import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Message } from '../shared.interface';

const dummyMessages: Message[] = [
  'Message1',
  'Message2',
  'Message3',
  'Message4',
  'Message5',
  'Message6',
  'Message7',
  'Message8',
  'Message9',
  'Message10'
]

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  searchMessages(keyword: string): Observable<Message[]> {
    return of(dummyMessages.filter(message => message.includes(keyword)));
  }
}
