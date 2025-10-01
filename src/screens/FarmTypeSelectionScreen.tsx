import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

type FarmType = {
  id: string;
  name: string;
  description: string;
};

const farmTypes: FarmType[] = [
  {
    id: '1',
    name: 'Organic Farm',
    description: 'Natural farming methods without synthetic inputs',
  },
  {
    id: '2',
    name: 'Traditional Farm',
    description: 'Time-tested conventional farming practices',
  },
  {
    id: '3',
    name: 'Mixed Farm',
    description: 'Combination of crops and livestock',
  },
  {
    id: '4',
    name: 'Specialty Farm',
    description: 'Focus on specific high-value crops',
  },
];

type Props = {
  navigation: any;
};

const FarmTypeSelectionScreen = ({ navigation }: Props) => {
  const [selectedType, setSelectedType] = useState<string>('');

  const handleSelection = (id: string) => {
    setSelectedType(id);
  };

  const handleContinue = () => {
    if (selectedType) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Farm Type</Text>
      <Text style={styles.subtitle}>Choose the type that best describes your farm</Text>

      <ScrollView style={styles.typesContainer}>
        {farmTypes.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.typeCard,
              selectedType === type.id && styles.selectedCard,
            ]}
            onPress={() => handleSelection(type.id)}
          >
            <Text style={[
              styles.typeName,
              selectedType === type.id && styles.selectedText
            ]}>
              {type.name}
            </Text>
            <Text style={[
              styles.typeDescription,
              selectedType === type.id && styles.selectedText
            ]}>
              {type.description}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedType && styles.disabledButton,
        ]}
        onPress={handleContinue}
        disabled={!selectedType}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.large,
  },
  title: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: SIZES.small,
  },
  subtitle: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
    textAlign: 'center',
    marginBottom: SIZES.xLarge,
  },
  typesContainer: {
    flex: 1,
    marginBottom: SIZES.xLarge,
  },
  typeCard: {
    backgroundColor: COLORS.white,
    padding: SIZES.large,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  selectedCard: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  typeName: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.small,
  },
  typeDescription: {
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
  selectedText: {
    color: COLORS.white,
  },
  continueButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: COLORS.tertiary,
  },
  continueButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
});

export default FarmTypeSelectionScreen;