import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator
        mode='modal'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            component={ListingsScreen}
            name={routes.LISTINGS}
        />
        <Stack.Screen
            component={ListingDetailsScreen}
            name={routes.LISTING_DETAILS}
        />
    </Stack.Navigator>
)

export default FeedNavigator;