import { ActionReducerMap } from '@ngrx/store';
import { conversationReducer } from './conversation.reducers';
import { IAppState } from '../state/app.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
  conversations: conversationReducer
}