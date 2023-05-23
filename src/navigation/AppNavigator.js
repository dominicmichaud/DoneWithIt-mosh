import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from '../navigation/NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            component={FeedNavigator}
            name={routes.FEED}
            options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} name="home" size={size} />
            }}
        />
        <Tab.Screen
            component={ListingEditScreen}
            name={routes.LISTING_EDIT}
            options={({ navigation }) => ({
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />
            })}
        />
        <Tab.Screen
            component={AccountNavigator}
            name={routes.ACCOUNT}
            options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} name="account" size={size} />
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;