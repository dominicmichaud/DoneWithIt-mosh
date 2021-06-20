import React from 'react';
import { SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import ViewCard from './src/screens/ViewCard';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import Icon from './src/components/helpers/Icon';
import ListItem from './src/components/listitem/ListItem';

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
      <SafeAreaView>
        <ListItem
          title="My Title"
          ImageComponent={
            <Icon name="email" />
          }
        />
      </SafeAreaView>
    );
  }
}
