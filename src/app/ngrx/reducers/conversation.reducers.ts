import { ConversationActions, EConversationActions } from '../actions/conversation.actions';
import { IConversationState, initialConversationState } from '../state/conversation.states';

export const conversationReducer = (
  state = initialConversationState,
  action: ConversationActions
): IConversationState => {
  switch (action.type) {
    case EConversationActions.GetConversationsSuccess:
      return {
        ...state, conversations: action.payload
      };
    default:
      return state;
  }
};
