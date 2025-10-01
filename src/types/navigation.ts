import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  FarmTypeSelection: undefined;
  MainTabs: { screen?: keyof MainTabParamList };
};

export type MainTabParamList = {
    Home: undefined;
    Quests: undefined;
    Leaderboard: undefined;
    Chatbot: undefined;
    Profile: undefined;
};

export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;
export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;
export type FarmTypeSelectionScreenProps = StackScreenProps<RootStackParamList, 'FarmTypeSelection'>;

export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  StackScreenProps<RootStackParamList>
>;