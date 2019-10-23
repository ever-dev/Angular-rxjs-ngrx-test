import { Message } from './Message.model';

export interface Conversation {
  participants: string[];
  message: Message[];
}
