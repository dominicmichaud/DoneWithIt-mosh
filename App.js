import React from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import navigationTheme from './src/navigation/navigationTheme';

import {
  useFonts,
  Oxygen_400Regular,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen';

import {
  NotoSerif_400Regular,
  NotoSerif_700Bold,
} from '@expo-google-fonts/noto-serif';

export default function App() {
  let [fontsLoaded] = useFonts({
    Oxygen_400Regular,
    Oxygen_700Bold,
    NotoSerif_400Regular,
    NotoSerif_700Bold,
  });

  console.disableYellowBox = true;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    );
  }
}
