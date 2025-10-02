import React from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { farmTypes } from '../data/sampleData';
import { COLORS } from '../constants/theme';
import { FarmTypeSelectionScreenProps } from '../types/navigation';

const FarmTypeSelectionScreen = ({ navigation }: FarmTypeSelectionScreenProps) => {
  
  const handleSelectFarm = (farmName: string) => {
    console.log(`Selected farm: ${farmName}`);
    navigation.replace('MainTabs', { screen: 'Home' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What kind of farm do you have?</Text>
      <Text style={styles.subtitle}>Select one to personalize your experience.</Text>
      <FlatList
        data={farmTypes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleSelectFarm(item.name)}>
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9', paddingTop: 50 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', paddingHorizontal: 20, color: COLORS.text },
  subtitle: { fontSize: 16, textAlign: 'center', color: COLORS.gray, marginBottom: 30, paddingHorizontal: 20 },
  card: { backgroundColor: 'white', padding: 25, marginVertical: 8, marginHorizontal: 20, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  cardText: { fontSize: 18, fontWeight: '600', color: COLORS.primary },
});

export default FarmTypeSelectionScreen;