import React, { useState } from 'react';
import { View } from 'react-native';

import { styles } from './Styles';
import { StatusBar } from 'expo-status-bar';
import { BatButton } from '../../components/BatButton/BatButton';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatForm } from '../../components/BatForm/BatForm';

export function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <View style={styles.appContainer}>
      {!showForm && (
        <>
          <View style={styles.logoContainer}>
            <BatLogo />
          </View>
          <View style={styles.inputContainer}>
            <BatButton onPress={() => setShowForm(true)} />
          </View>
        </>
      )}

      {showForm && (
        <View style={styles.inputContainer}>
          <BatForm />
        </View>
      )}

      <StatusBar style="light" />
    </View>
  );
}