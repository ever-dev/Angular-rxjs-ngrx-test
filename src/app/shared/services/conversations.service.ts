import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Conversation } from 'src/app/ngrx/models/Conversation.model';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  conversations: Subject<Conversation[]> = new Subject<Conversation[]>();

  constructor() { }

  getConversations(): Observable<Conversation[]> {
    // here call API to get conversations.
    return this.conversations.asObservable();
  }
}
