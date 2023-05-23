import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from './routes';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            component={AccountScreen}
            name={routes.ACCOUNT}
        />
        <Stack.Screen
            component={MessagesScreen}
            name={routes.MESSAGES}
        />
    </Stack.Navigator>
)

export default AccountNavigator;