import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

type Props = {
  navigation: any;
};

const SignUpScreen = ({ navigation }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password === confirmPassword && name && email) {
      navigation.navigate('FarmTypeSelection');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join the farming community</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginContainer}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flexGrow: 1,
    padding: SIZES.large,
    justifyContent: 'center',
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
  inputContainer: {
    gap: SIZES.medium,
    marginBottom: SIZES.xLarge,
  },
  input: {
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  signupButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
  },
  signupButtonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  loginContainer: {
    alignItems: 'center',
  },
  loginText: {
    color: COLORS.text,
    fontSize: SIZES.medium,
  },
  loginLink: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;