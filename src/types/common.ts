export interface ChatbotItem {
  id: string;
  question: string;
  answer: string;
}

export interface FarmType {
  id: string;
  name: string;
  icon: string;
}

export interface LeaderboardItem {
  id: string;
  rank: number;
  name: string;
  score: number;
  location: string;
}

export interface QuestItem {
  id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
}