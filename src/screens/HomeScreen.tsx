import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme';
import { quests } from '../data/sampleData';
import { MainTabScreenProps } from '../types/navigation';

const HomeScreen = ({ navigation }: MainTabScreenProps<'Home'>) => {
  const activeQuests = quests.filter(q => !q.completed);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Farmer!</Text>
          <Text style={styles.welcome}>Welcome to Jaivam Jeevan</Text>
        </View>
        <View style={styles.scoreCard}>
          <Text style={styles.scoreTitle}>Your Sustainability Score</Text>
          <Text style={styles.score}>1050</Text>
          <Text style={styles.scoreSubtitle}>Keep up the great work!</Text>
        </View>
        <View style={styles.questsContainer}>
          <View style={styles.questsHeader}>
            <Text style={styles.sectionTitle}>Active Missions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Quests')}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          {activeQuests.slice(0, 2).map(quest => (
             <TouchableOpacity key={quest.id} style={styles.questCard} onPress={() => navigation.navigate('Quests')}>
                <Text style={styles.questTitle}>{quest.title}</Text>
                <Text style={styles.questPoints}>+ {quest.points} PTS</Text>
             </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: { padding: 20 },
  greeting: { fontSize: 28, fontWeight: 'bold', color: COLORS.text },
  welcome: { fontSize: 16, color: COLORS.gray, marginTop: 4 },
  scoreCard: { backgroundColor: COLORS.primary, marginHorizontal: 20, borderRadius: 16, padding: 25, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 5, elevation: 6 },
  scoreTitle: { fontSize: 16, color: '#FFFFFF', opacity: 0.8 },
  score: { fontSize: 48, fontWeight: 'bold', color: '#FFFFFF', marginVertical: 5 },
  scoreSubtitle: { fontSize: 14, color: '#FFFFFF', opacity: 0.9 },
  questsContainer: { marginTop: 30, paddingHorizontal: 20 },
  questsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.text },
  viewAll: { fontSize: 14, color: COLORS.primary, fontWeight: '600' },
  questCard: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, borderWidth: 1, borderColor: '#E0E0E0' },
  questTitle: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  questPoints: { fontSize: 16, fontWeight: 'bold', color: COLORS.secondary },
});

export default HomeScreen;