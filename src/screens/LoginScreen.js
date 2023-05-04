import React, { useState } from 'react';
import { Image, View } from 'react-native';

import RoundedButton from '../components/buttons/RoundedButton';
import AppLogoPath from '../assets/logo-red.png';
import AppTextInput from '../components/inputs/AppTextInput';
import SafeScreen from '../components/helpers/SafeScreen';
import styles from '../styles/screens/screen.login.style.js';
import theme from '../config/theme';

function LoginScreen(props) {
    const { primary } = theme;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeScreen>
            <Image
                source={AppLogoPath}
                style={styles.appLogo}
            />
            <View>
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    label="Email"
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    label="Password"
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <RoundedButton
                    bgColor={primary}
                    label="Login"
                    pressHandler={() => console.log('whatever', password, email)}
                />
            </View>
        </SafeScreen>
    );
}

export default LoginScreen;