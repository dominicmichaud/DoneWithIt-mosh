import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import routes from './routes';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            component={WelcomeScreen}
            name={routes.WELCOME}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            component={LoginScreen}
            name={routes.LOGIN}
        />
        <Stack.Screen
            component={RegisterScreen}
            name={routes.REGISTER}
        />
    </Stack.Navigator>
);

export default AuthNavigator;