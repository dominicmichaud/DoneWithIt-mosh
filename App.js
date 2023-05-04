import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import AccountScreen from './src/screens/AccountScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import ViewCard from './src/screens/ViewCard';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import Icon from './src/components/helpers/Icon';
import ListItem from './src/components/listitem/ListItem';
import ListingsScreen from './src/screens/ListingsScreen';
import AppTextInput from './src/components/inputs/AppTextInput';
import AppPicker from './src/components/picker/AppPicker';
import RoundedButton from './src/components/buttons/RoundedButton';
import Card from './src/components/card/Card';

const categories = [
  {
    label: "Furniture",
    value: 1
  },
  {
    label: "Clothing",
    value: 2
  },
  {
    label: "Cameras",
    value: 3
  },
];

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

  const [category, setCategory] = useState();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView>
        <AppTextInput label="Name" placeholder="Waddaup!" icon="email" />
        <AppPicker
          icon="apps"
          items={categories}
          onSelectItem={item => setCategory(item)}
          placeholder="Category"
          selectedItem={category}
        />
      </SafeAreaView>
    );
  }
}
