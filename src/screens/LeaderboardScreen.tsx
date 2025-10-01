import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { leaderboardData } from '../data/sampleData';
import { COLORS } from '../constants/theme';

const LeaderboardScreen = () => {
  
  const renderItem = ({ item }) => (
    <View style={[styles.entryCard, item.name.includes('You') ? styles.userCard : {}]}>
      <Text style={styles.rank}>{item.rank}</Text>
      <View style={{flex: 1}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
      <Text style={styles.score}>{item.score} PTS</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Community Leaderboard</Text>
      <Text style={styles.subHeader}>See how you rank against other farmers in Kerala.</Text>
      <FlatList
        data={leaderboardData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subHeader: {
    fontSize: 16,
    color: COLORS.gray,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  entryCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  userCard: {
    backgroundColor: '#E3F2FD',
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  rank: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginRight: 15,
    width: 30,
    textAlign: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.dark,
  },
  location: {
    fontSize: 12,
    color: COLORS.gray,
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
});

export default LeaderboardScreen;
