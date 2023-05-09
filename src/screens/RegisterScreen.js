import React from 'react';
import { Image, View } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppSubmitButton } from '../components/form';
import AppLogoPath from '../assets/logo-red.png';
import SafeScreen from '../components/helpers/SafeScreen';
import styles from '../styles/screens/screen.login.style.js';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().label("Name"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
    return (
        <SafeScreen>
            <Image
                source={AppLogoPath}
                style={styles.appLogo}
            />
            <View>
                <AppForm
                    initialValues={{ email: '', name: '', password: '' }}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder="Name"
                        textContentType="name"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <AppSubmitButton label="Register" />
                </AppForm>
            </View>
        </SafeScreen>
    );
}

export default RegisterScreen;