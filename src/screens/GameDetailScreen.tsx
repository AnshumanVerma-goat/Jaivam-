import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import MemoryGame from '../games/MemoryGame';
import { RootStackParamList } from '../types/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'GameDetail'>;
  route: RouteProp<RootStackParamList, 'GameDetail'>;
};

const GameDetailScreen = ({ route }: Props) => {
  const { gameId } = route.params as { gameId: string };

  const getGameDetails = (id: string) => {
    switch (id) {
      case '1':
        return {
          title: 'Memory Match',
          description: 'Test and improve your memory by matching pairs of cards.',
          component: <MemoryGame />,
        };
      case '2':
        return {
          title: 'Focus Flow',
          description: 'Coming soon! A meditative game that helps improve your focus.',
          component: <Text style={styles.comingSoon}>Coming Soon!</Text>,
        };
      case '3':
        return {
          title: 'Mind Puzzle',
          description: 'Coming soon! Challenge your brain with various puzzle types.',
          component: <Text style={styles.comingSoon}>Coming Soon!</Text>,
        };
      default:
        return {
          title: 'Game not found',
          description: '',
          component: null,
        };
    }
  };

  const gameDetails = getGameDetails(gameId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{gameDetails.title}</Text>
      <Text style={styles.description}>{gameDetails.description}</Text>
      <View style={styles.gameContainer}>
        {gameDetails.component}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
  },
  gameContainer: {
    flex: 1,
  },
  comingSoon: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default GameDetailScreen;