import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList, TabParamList } from '../types/navigation';

type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, 'Profile'>,
    NativeStackNavigationProp<RootStackParamList>
  >;
};

const ProfileScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.username}>User Name</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Crops Growing</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Farm Tips</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Farm Type</Text>
        <Text style={styles.sectionContent}>Organic Farm</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionContent}>Track your farming progress, learn sustainable practices, and connect with other farmers in your community.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.large,
    backgroundColor: COLORS.background,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: SIZES.xLarge,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.tertiary,
    marginBottom: SIZES.small,
  },
  username: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: SIZES.xLarge,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  statLabel: {
    color: COLORS.secondary,
    marginTop: SIZES.xSmall,
    fontSize: SIZES.medium,
  },
  section: {
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  sectionTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SIZES.small,
  },
  sectionContent: {
    color: COLORS.text,
    lineHeight: SIZES.large + 4,
    fontSize: SIZES.medium,
  },
});

export default ProfileScreen;