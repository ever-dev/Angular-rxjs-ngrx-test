export type Message = string;
export interface Conversation {
  sender: string;
  receiver: string;
  messages: Message[];
}

export type Theme = "theme-1" | "theme-2";