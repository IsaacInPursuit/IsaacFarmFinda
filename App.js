import React, { useState } from 'react';
import { View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  const [screen, setScreen] = useState('login');

  return (
    <View style={{ flex: 1 }}>
      {screen === 'login' ? (
        <LoginScreen onSwitch={() => setScreen('register')} />
      ) : (
        <RegisterScreen onSwitch={() => setScreen('login')} />
      )}
    </View>
  );
}
