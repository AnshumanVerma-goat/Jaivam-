import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { quests } from '../data/sampleData';
import { COLORS } from '../constants/theme';

const QuestsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Available Missions</Text>
      <Text style={styles.subHeader}>Complete missions to earn points and improve your Sustainability Score.</Text>
      
      <View style={styles.listContainer}>
        {quests.map((item, index) => (
          <View key={item.id} style={[styles.questCard, item.completed ? styles.completedCard : {}]}>
            <View style={styles.questHeader}>
              <Text style={styles.questTitle}>{item.title}</Text>
              <Text style={styles.questPoints}>{item.points} PTS</Text>
            </View>
            <Text style={styles.questDescription}>{item.description}</Text>
            <TouchableOpacity 
              style={[styles.button, item.completed ? styles.completedButton : styles.activeButton]}
              disabled={item.completed}
            >
              <Text style={styles.buttonText}>{item.completed ? 'Completed' : 'Mark as Complete'}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
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
  listContainer: {
    paddingHorizontal: 20,
  },
  questCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedCard: {
    backgroundColor: '#E8F5E9', // Light green for completed
  },
  questHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  questTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.dark,
    flex: 1,
  },
  questPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  questDescription: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: COLORS.primary,
  },
  completedButton: {
    backgroundColor: '#A5D6A7',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default QuestsScreen;
