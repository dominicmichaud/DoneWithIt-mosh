import React from 'react';
import { Image, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppFormField from '../components/form/AppFormField';
import AppLogoPath from '../assets/logo-red.png';
import AppSubmitButton from '../components/form/AppSubmitButton';
import SafeScreen from '../components/helpers/SafeScreen';
import styles from '../styles/screens/screen.login.style.js';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    return (
        <SafeScreen>
            <Image
                source={AppLogoPath}
                style={styles.appLogo}
            />
            <View>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {() => (
                        <>
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
                            <AppSubmitButton label="Login" />
                        </>
                    )}
                </Formik>
            </View>
        </SafeScreen>
    );
}

export default LoginScreen;