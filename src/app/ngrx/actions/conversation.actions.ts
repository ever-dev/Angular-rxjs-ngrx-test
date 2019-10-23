import {Action} from '@ngrx/store';
import { Conversation } from '../models/Conversation.model';

export enum EConversationActions {
  GetConversations = '[Conversation] Get Conversations',
  GetConversationsSuccess = '[Conversation] Get Conversations Success'
}

export class GetConversations implements Action {
  public readonly type = EConversationActions.GetConversations;
}

export class GetConversationsSuccess implements Action {
  public readonly type = EConversationActions.GetConversationsSuccess;
  constructor(public payload: Conversation[]) {}
}

export type ConversationActions = GetConversations | GetConversationsSuccess;
