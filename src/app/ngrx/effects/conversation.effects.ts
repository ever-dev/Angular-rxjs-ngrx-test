import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { GetConversations, GetConversationsSuccess, EConversationActions } from '../actions/conversation.actions';
import { ConversationsService } from '../../shared/services/conversations.service';
import { Conversation } from '../models/Conversation.model';

@Injectable()
export class ConversationEffects {
  @Effect()
  getConversations$ = this.actions$.pipe(
    ofType<GetConversations>(EConversationActions.GetConversations),
    switchMap(() => this.conversationsService.getConversations()),
    switchMap((conversations: Conversation[]) => of(new GetConversationsSuccess(conversations)))
  );
  constructor(
    private conversationsService: ConversationsService,
    private actions$: Actions,
  ) { }
}
