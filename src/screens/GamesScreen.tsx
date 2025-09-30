import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList, TabParamList } from '../types/navigation';

type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'Games'>,
    NativeStackNavigationProp<RootStackParamList>
  >;
};

const games = [
  { id: '1', title: 'Memory Match', description: 'Test and improve your memory' },
  { id: '2', title: 'Focus Flow', description: 'Enhance your concentration' },
  { id: '3', title: 'Mind Puzzle', description: 'Challenge your problem-solving skills' },
];

const GamesScreen = ({ navigation }: Props) => {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.gameCard}
      onPress={() => navigation.navigate('GameDetail', { gameId: item.id })}
    >
      <Text style={styles.gameTitle}>{item.title}</Text>
      <Text style={styles.gameDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Games</Text>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    gap: 15,
  },
  gameCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  gameDescription: {
    color: '#666',
  },
});

export default GamesScreen;