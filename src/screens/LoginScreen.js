import React from 'react';
import { Image, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppLogoPath from '../assets/logo-red.png';
import AppTextInput from '../components/inputs/AppTextInput';
import RoundedButton from '../components/buttons/RoundedButton';
import SafeScreen from '../components/helpers/SafeScreen';
import styles from '../styles/screens/screen.login.style.js';
import theme from '../config/theme';
import Typography from '../components/helpers/Typography';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    const { danger, primary } = theme;

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
                    {({ handleChange, handleSubmit, errors }) => (
                        <>
                            <AppTextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="email"
                                keyboardType="email-address"
                                label="Email"
                                onChangeText={handleChange("email")}
                                placeholder="Email"
                                textContentType="emailAddress"
                            />
                            {errors.email && (
                                <Typography color={danger}>
                                    {errors.email}
                                </Typography>
                            )}
                            <AppTextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                label="Password"
                                onChangeText={handleChange("password")}
                                placeholder="Password"
                                secureTextEntry
                                textContentType="password"
                            />
                            {errors.password && (
                                <Typography color={danger}>
                                    {errors.password}
                                </Typography>
                            )}
                            <RoundedButton
                                bgColor={primary}
                                label="Login"
                                pressHandler={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </View>
        </SafeScreen>
    );
}

export default LoginScreen;