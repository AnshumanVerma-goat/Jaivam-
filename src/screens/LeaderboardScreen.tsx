import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { leaderboardData } from '../data/sampleData';
import { COLORS } from '../constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';

const LeaderboardScreen = () => {
  const renderItem = ({ item, index }: { item: any, index: number }) => (
    <View style={styles.row}>
      <Text style={styles.rank}>{index + 1}</Text>
      <View style={{flex: 1}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.farmType}>{item.farmType}</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Ionicons name="star" size={16} color={COLORS.secondary} />
        <Text style={styles.score}>{item.points}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.subtitle}>See who is leading the way in sustainable farming!</Text>
      </View>
      <FlatList
        data={leaderboardData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#EEE' },
  title: { fontSize: 32, fontWeight: 'bold', color: COLORS.primary },
  subtitle: { fontSize: 16, color: COLORS.gray, marginTop: 4 },
  list: { paddingHorizontal: 20, paddingTop: 10 },
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 2, 
    elevation: 2,
  },
  rank: { fontSize: 18, fontWeight: 'bold', color: COLORS.gray, width: 40 },
  name: { fontSize: 18, fontWeight: '600', color: COLORS.text },
  farmType: { fontSize: 12, color: COLORS.gray, marginTop: 2 },
  scoreContainer: { flexDirection: 'row', alignItems: 'center' },
  score: { fontSize: 18, fontWeight: 'bold', color: COLORS.secondary, marginLeft: 5 },
});

export default LeaderboardScreen;