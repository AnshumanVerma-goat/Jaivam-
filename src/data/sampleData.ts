export interface FarmType {
    id: string;
    name: string;
    icon: string;
}

export const farmTypes: FarmType[] = [
    { id: '1', name: 'Coconut & Spice Farm', icon: '🌴' },
    { id: '2', name: 'Rubber Plantation', icon: '🌳' },
    { id: '3', name: 'Paddy (Rice) Cultivation', icon: '🌾' },
    { id: '4', name: 'Mixed Crop Farm (Vegetables & Fruits)', icon: '🌱' },
    { id: '5', name: 'Tea & Coffee Estate', icon: '☘️' },
];

export const leaderboardData = [
    { id: '1', name: 'Ravi Kumar', farmType: 'Paddy Cultivation', points: 1550 },
    { id: '2', name: 'Anjali Menon', farmType: 'Coconut & Spice Farm', points: 1420 },
    { id: '3', name: 'Suresh Pillai', farmType: 'Rubber Plantation', points: 1300 },
    { id: '4', name: 'Deepa Nair', farmType: 'Mixed Crop Farm', points: 1150 },
    { id: '5', name: 'You', farmType: 'Coconut & Spice Farm', points: 1050 },
];

export const quests = [
    { id: 'q1', title: 'Implement Drip Irrigation', description: 'Install a drip irrigation system for 1 acre of your farm to save water.', points: 150, completed: true },
    { id: 'q2', title: 'Use Organic Pesticides', description: 'Switch to neem oil or other organic pesticides for one crop cycle.', points: 100, completed: true },
    { id: 'q3', title: 'Start Composting', description: 'Create a compost pit for farm waste.', points: 80, completed: true },
    { id: 'q4', title: 'Soil Health Test', description: 'Get a soil health card or test your soil for nutrient levels.', points: 120, completed: false },
    { id: 'q5', title: 'Introduce Cover Crops', description: 'Plant cover crops like legumes on a fallow plot to improve soil nitrogen.', points: 200, completed: false },
];

export const chatbotData = [
    { id: 'c1', question: 'How can I improve soil health?', answer: 'Improving soil health involves several practices. Start by adding organic matter like compost, use cover crops to prevent erosion and add nutrients, and practice crop rotation to avoid depleting specific nutrients.' },
    { id: 'c2', question: 'What are the benefits of drip irrigation?', answer: 'Drip irrigation is highly efficient. It reduces water wastage by delivering water directly to the plant roots, minimizes weed growth, and can reduce the spread of fungal diseases by keeping foliage dry.' },
    { id: 'c3', question: 'Which organic pesticide is best for my crops?', answer: 'Neem oil is a great broad-spectrum organic pesticide. It works against many common pests. For specific issues, creating a spray from garlic, onion, and chili can also be effective.' },
];