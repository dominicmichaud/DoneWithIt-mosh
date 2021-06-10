import React from 'react';
import AppLoading from 'expo-app-loading';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import ViewCard from './src/screens/ViewCard';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';

import {
  useFonts,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen';

import {
  NotoSerif_400Regular,
  NotoSerif_700Bold,
} from '@expo-google-fonts/noto-serif';


export default function App() {
  let [fontsLoaded] = useFonts({
    Oxygen_700Bold,
    NotoSerif_400Regular,
    NotoSerif_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <MessagesScreen />
    );
  }
}
