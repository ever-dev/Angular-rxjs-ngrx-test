import { Conversation } from '../models/Conversation.model';

export interface IConversationState {
  conversations: Conversation[];
}

export const initialConversationState = {
  conversations: []
};
