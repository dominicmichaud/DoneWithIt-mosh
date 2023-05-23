import React from 'react';
import { Button, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import AppLoading from 'expo-app-loading';
import SafeScreen from './src/components/helpers/SafeScreen';

import {
  useFonts,
  Oxygen_400Regular,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen';

import {
  NotoSerif_400Regular,
  NotoSerif_700Bold,
} from '@expo-google-fonts/noto-serif';

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  )
};

const Tweets = ({ navigation }) => (
  <SafeScreen>
    <Text>Tweets</Text>
    <Link />
  </SafeScreen>
);

const TweetDetails = () => (
  <SafeScreen>
    <Text>Tweet Details</Text>
  </SafeScreen>
);

const Account = () => (
  <SafeScreen>
    <Text>Account</Text>
  </SafeScreen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator initialRouteName='Tweets' screenOptions={{
    headerStyle: { backgroundColor: 'dodgerblue' },
    headerTintColor: 'white'
  }}>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetDetails' component={TweetDetails} options={{ title: "My Super Awesome Tweet" }} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'dodgerblue',
      activeTintColor: '#FFF',
      inactiveBackgroundColor: '#ebebeb'
    }}
  >
    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} name="home" size={size} />
      }}
    />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
);


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
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }
}
