export interface FarmType {
  id: string;
  name: string;
  icon: string; // Emoji for simplicity
}

export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  score: number;
  location: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export const farmTypes: FarmType[] = [
  { id: '1', name: 'Coconut Plantation', icon: '🥥' },
  { id: '2', name: 'Spice Garden (Pepper, Cardamom)', icon: '🌶️' },
  { id: '3', name: 'Paddy (Rice) Field', icon: '🌾' },
  { id: '4', name: 'Rubber Plantation', icon: '🌳' },
  { id: '5', name: 'Mixed Crop Farm', icon: '🏡' },
];

export const leaderboardData: LeaderboardEntry[] = [
  { id: '1', rank: 1, name: 'Rajan V.', score: 1250, location: 'Wayanad' },
  { id: '2', rank: 2, name: 'Anitha K.', score: 1180, location: 'Idukki' },
  { id: '3', rank: 3, name: 'Suresh P.', score: 1120, location: 'Palakkad' },
  { id: '4', rank: 4, name: 'Farmer (You)', score: 1050, location: 'Your Location' },
  { id: '5', rank: 5, name: 'Geetha M.', score: 980, location: 'Thrissur' },
];

export const quests: Quest[] = [
  { id: '1', title: 'Soil Health Test', description: 'Perform a basic soil pH test and log the results.', points: 50, completed: true },
  { id: '2', title: 'Water Conservation', description: 'Implement drip irrigation for at least one row of crops.', points: 100, completed: false },
  { id: '3', title: 'Organic Pest Control', description: 'Create and apply a neem oil-based pesticide.', points: 75, completed: false },
  { id: '4', title: 'Composting Kickstart', description: 'Start a new compost pile with farm waste.', points: 60, completed: false },
];

export const chatbotData: FaqItem[] = [
  {
    question: "What is organic farming?",
    answer: "Organic farming is a method of agriculture that avoids the use of synthetic fertilizers, pesticides, and other artificial inputs. It focuses on maintaining soil health through natural processes."
  },
  {
    question: "How do I start composting?",
    answer: "To start composting: 1) Choose a shady spot for your compost pile, 2) Layer green materials (food scraps, grass) with brown materials (leaves, twigs), 3) Keep it moist but not wet, 4) Turn the pile regularly."
  },
  {
    question: "What are natural pest control methods?",
    answer: "Natural pest control methods include: companion planting, using neem oil spray, introducing beneficial insects, crop rotation, and maintaining healthy soil."
  }
];

export const faqData: FaqItem[] = [
    { question: "How do I improve my soil health?", answer: "Improving soil health starts with regular testing. Try adding organic compost, rotating your crops each season, and planting cover crops like legumes to add nitrogen back into the soil." },
    { question: "What is the best way to save water?", answer: "Drip irrigation is highly effective as it delivers water directly to the plant roots, minimizing evaporation. Also, consider collecting rainwater in tanks for later use." },
    { question: "How to deal with pests naturally?", answer: "Neem oil solution is a great organic pesticide. You can also introduce beneficial insects like ladybugs that eat aphids. Planting marigolds around your crops can also deter many common pests." },
    { question: "When should I harvest my coconuts?", answer: "For tender coconut water, harvest around 6-7 months. For mature coconuts for oil or cooking, wait until they are 11-12 months old, when the husk is brown and dry." },
    { question: "What is a good organic fertilizer?", answer: "Composted farm waste is excellent. You can also use cow dung manure (after aging it), vermicompost, or bone meal. These release nutrients slowly and improve soil structure." },
     // Add up to 10-12 questions here
];
