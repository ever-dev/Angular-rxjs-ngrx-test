export type Message = string;
export interface Conversation {
  sender: string;
  receiver: string;
  messages: Message[];
}