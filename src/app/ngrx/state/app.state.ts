import { IConversationState } from './conversation.states';

export interface IAppState {
  conversations: IConversationState;
}