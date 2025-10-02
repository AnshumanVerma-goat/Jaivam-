import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { COLORS } from '../constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <Ionicons name="person-circle-outline" size={80} color={COLORS.primary} />
          <Text style={styles.profileName}>Anshuman Verma</Text>
          <Text style={styles.farmType}>Coconut & Spice Farm</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>1050</Text>
            <Text style={styles.statLabel}>Total Points</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Missions Done</Text>
          </View>
        </View>

        <View style={styles.badgesContainer}>
          <Text style={styles.sectionTitle}>Your Badges</Text>
          <View style={styles.badgesGrid}>
            <View style={styles.badge}>
              <Ionicons name="leaf" size={32} color={COLORS.primary} />
              <Text style={styles.badgeText}>First Quest</Text>
            </View>
            <View style={styles.badge}>
              <Ionicons name="water" size={32} color={COLORS.primary} />
              <Text style={styles.badgeText}>Water Saver</Text>
            </View>
            <View style={styles.badge}>
              <Ionicons name="earth" size={32} color={COLORS.primary} />
              <Text style={styles.badgeText}>Soil Expert</Text>
            </View>
             <View style={styles.badge}>
              <Ionicons name="ribbon" size={32} color={COLORS.gray} />
              <Text style={styles.badgeText}>Coming Soon</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  profileHeader: { alignItems: 'center', padding: 30, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#EEE' },
  profileName: { fontSize: 24, fontWeight: 'bold', color: COLORS.text, marginTop: 10 },
  farmType: { fontSize: 16, color: COLORS.gray, marginTop: 4 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', padding: 20, },
  statBox: { alignItems: 'center', backgroundColor: 'white', padding: 20, borderRadius: 10, width: '45%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2.22, elevation: 3, },
  statValue: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary },
  statLabel: { fontSize: 14, color: COLORS.gray, marginTop: 5 },
  badgesContainer: { padding: 20, marginTop: 10 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.text, marginBottom: 15 },
  badgesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  badge: { alignItems: 'center', width: '48%', backgroundColor: 'white', padding: 20, borderRadius: 10, marginBottom: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2.22, elevation: 3, },
  badgeText: { marginTop: 8, fontSize: 14, color: COLORS.text },
});

export default ProfileScreen;