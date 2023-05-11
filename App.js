import React from 'react';

import AppLoading from 'expo-app-loading';
import ListingEditScreen from './src/screens/ListingEditScreen';

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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ListingEditScreen />
    );
  }
}
