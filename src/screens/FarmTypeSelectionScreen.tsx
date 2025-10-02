import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  FlatList,
  View,
  ActivityIndicator,
  Alert
} from 'react-native';
import { farmTypes, FarmType } from '../data/sampleData';
import { COLORS } from '../constants/theme';
import { FarmTypeSelectionScreenProps } from '../types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FarmTypeSelectionScreen = ({ navigation }: FarmTypeSelectionScreenProps) => {
  const [selectedFarm, setSelectedFarm] = useState<FarmType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectFarm = async (farm: FarmType) => {
    try {
      setIsLoading(true);
      setSelectedFarm(farm);

      // Save the selected farm to AsyncStorage
      await AsyncStorage.setItem('selectedFarm', JSON.stringify(farm));

      // Navigate to the main app
      navigation.replace('MainTabs', { screen: 'Home' });
    } catch (error) {
      Alert.alert(
        'Error',
        'Failed to save farm selection. Please try again.',
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const renderFarmCard = ({ item }: { item: FarmType }) => {
    const isSelected = selectedFarm?.id === item.id;

    return (
      <TouchableOpacity 
        style={[
          styles.card,
          isSelected && styles.selectedCard
        ]} 
        onPress={() => handleSelectFarm(item)}
        disabled={isLoading}
      >
        <View style={styles.cardContent}>
          <Text style={styles.farmIcon}>{item.icon}</Text>
          <View style={styles.farmInfo}>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>What kind of farm do you have?</Text>
        <Text style={styles.subtitle}>Select one to personalize your experience.</Text>
      </View>
      
      <FlatList
        data={farmTypes}
        keyExtractor={(item) => item.id}
        renderItem={renderFarmCard}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    color: COLORS.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.gray,
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedCard: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    backgroundColor: '#F8F8F8',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  farmIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  farmInfo: {
    flex: 1,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
  },
});

export default FarmTypeSelectionScreen;