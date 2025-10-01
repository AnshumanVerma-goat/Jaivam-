export type FarmType = 'Rice' | 'Wheat' | 'Vegetables' | 'Fruits';

export interface User {
  id: string;
  name: string;
  email: string;
  farmType: FarmType;
  score: number;
  achievements: string[];
}

export const sampleUsers: User[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    farmType: 'Rice',
    score: 850,
    achievements: ['Best Yield 2025', 'Water Conservation Expert']
  },
  {
    id: '2',
    name: 'Priya Singh',
    email: 'priya@example.com',
    farmType: 'Vegetables',
    score: 920,
    achievements: ['Organic Farming Pioneer', 'Community Leader']
  },
  // Add more sample users
];

export interface ChatMessage {
  question: string;
  answer: string;
}

export const sampleChatMessages: ChatMessage[] = [
  {
    question: "How can I improve soil fertility naturally?",
    answer: "You can improve soil fertility naturally through several methods: 1) Use of organic compost 2) Crop rotation 3) Green manuring 4) Using bio-fertilizers 5) Mulching"
  },
  {
    question: "What are the best practices for water conservation?",
    answer: "Key water conservation practices include: 1) Drip irrigation 2) Mulching 3) Rainwater harvesting 4) Evening/early morning watering 5) Soil moisture monitoring"
  },
  {
    question: "How to control pests organically?",
    answer: "Organic pest control methods include: 1) Neem-based solutions 2) Companion planting 3) Natural predators 4) Trap crops 5) Organic sprays with chili or garlic"
  }
];

export interface FarmTip {
  id: string;
  title: string;
  description: string;
  farmType: FarmType;
}

export const sampleFarmTips: FarmTip[] = [
  {
    id: '1',
    title: 'Optimal Rice Planting Time',
    description: 'The best time to plant rice is during the monsoon season when there is adequate rainfall.',
    farmType: 'Rice'
  },
  {
    id: '2',
    title: 'Vegetable Crop Rotation',
    description: 'Rotate your vegetable crops every season to maintain soil health and prevent pest buildup.',
    farmType: 'Vegetables'
  }
  // Add more tips
];