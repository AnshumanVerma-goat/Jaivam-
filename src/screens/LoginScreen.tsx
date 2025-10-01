import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

type Props = {
  navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For prototype, use any valid email format
    if (email && password) {
      navigation.replace('FarmTypeSelection');
    }
  };

  const handleGoogleLogin = () => {
    // For prototype, directly navigate
    navigation.replace('FarmTypeSelection');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Jaivam Jeevan</Text>
        <Text style={styles.subtitle}>Welcome back!</Text>

        <View style={styles.inputContainer}>
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
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.signupContainer}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.signupText}>
            Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
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
  loginButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
  },
  loginButtonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    marginBottom: SIZES.large,
  },
  googleButtonText: {
    color: COLORS.text,
    textAlign: 'center',
    fontSize: SIZES.medium,
  },
  signupContainer: {
    alignItems: 'center',
  },
  signupText: {
    color: COLORS.text,
    fontSize: SIZES.medium,
  },
  signupLink: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export default LoginScreen;