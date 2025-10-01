import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  FarmTypeSelection: undefined;
  MainTabs: undefined;
};

export type TabParamList = {
  Home: undefined;
  Quests: undefined;
  Leaderboard: undefined;
  Chatbot: undefined;
  Profile: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
  NativeStackScreenProps<RootStackParamList, T>;

export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

// Export convenience types for each screen
export type LoginScreenProps = RootStackScreenProps<'Login'>;
export type SignUpScreenProps = RootStackScreenProps<'SignUp'>;
export type FarmTypeSelectionScreenProps = RootStackScreenProps<'FarmTypeSelection'>;
export type HomeScreenProps = TabScreenProps<'Home'>;
export type QuestsScreenProps = TabScreenProps<'Quests'>;
export type LeaderboardScreenProps = TabScreenProps<'Leaderboard'>;
export type ChatbotScreenProps = TabScreenProps<'Chatbot'>;
export type ProfileScreenProps = TabScreenProps<'Profile'>;
