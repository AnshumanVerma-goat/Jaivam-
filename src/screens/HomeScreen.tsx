import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList, TabParamList } from '../types/navigation';

type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'Home'>,
    NativeStackNavigationProp<RootStackParamList>
  >;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Jaivam Jeevan</Text>
      <Text style={styles.subtitle}>Your journey to wellness begins here</Text>
      
      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Track your progress, learn sustainable farming practices, and connect with other farmers.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.large,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    marginBottom: SIZES.small,
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
    marginBottom: SIZES.xLarge,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    padding: SIZES.large,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  welcomeText: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: SIZES.large + 4,
  },
});

export default HomeScreen;