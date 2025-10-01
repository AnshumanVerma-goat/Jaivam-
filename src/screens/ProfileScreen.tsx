import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { COLORS } from '../constants/theme';
import { quests } from '../data/sampleData';

const ProfileScreen = () => {
  const completedQuests = quests.filter(q => q.completed);
  const totalPoints = completedQuests.reduce((sum, q) => sum + q.points, 1000); // Base points

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.name}>Your Progress</Text>
        </View>

        <View style={styles.statsContainer}>
            <View style={styles.statBox}>
                <Text style={styles.statValue}>{totalPoints}</Text>
                <Text style={styles.statLabel}>Total Points</Text>
            </View>
             <View style={styles.statBox}>
                <Text style={styles.statValue}>{completedQuests.length}</Text>
                <Text style={styles.statLabel}>Missions Done</Text>
            </View>
        </View>
        
        <View style={styles.badgesContainer}>
            <Text style={styles.sectionTitle}>Your Badges</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.badgeList}>
                <View style={styles.badge}><Text style={styles.badgeIcon}>💧</Text><Text style={styles.badgeText}>Water Saver</Text></View>
                <View style={styles.badge}><Text style={styles.badgeIcon}>🌱</Text><Text style={styles.badgeText}>Organic Novice</Text></View>
                <View style={styles.badge}><Text style={styles.badgeIcon}>🏆</Text><Text style={styles.badgeText}>First Mission</Text></View>
            </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  name: { fontSize: 28, fontWeight: 'bold', color: COLORS.primary },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: { fontSize: 24, fontWeight: 'bold', color: COLORS.dark },
  statLabel: { fontSize: 14, color: COLORS.gray, marginTop: 5 },
  badgesContainer: {
      marginTop: 20,
      paddingHorizontal: 20,
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.dark, marginBottom: 15 },
  badgeList: {
      paddingBottom: 10,
  },
  badge: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 15,
    width: 120,
  },
  badgeIcon: {
      fontSize: 40,
  },
  badgeText: {
      marginTop: 10,
      fontWeight: '600',
      color: COLORS.dark,
  }
});

export default ProfileScreen;
