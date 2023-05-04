import React from 'react';
import { Image, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppLogoPath from '../assets/logo-red.png';
import AppTextInput from '../components/form/AppTextInput';
import ErrorMessage from '../components/form/ErrorMessage';
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
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                        <>
                            <View style={styles.formControl}>
                                <AppTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="email"
                                    keyboardType="email-address"
                                    onBlur={() => setFieldTouched('email')}
                                    onChangeText={handleChange("email")}
                                    placeholder="Email"
                                    textContentType="emailAddress"
                                />
                                <ErrorMessage error={errors.email} visible={touched.email} />
                            </View>
                            <View style={styles.formControl}>
                                <AppTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="lock"
                                    onBlur={() => setFieldTouched('password')}
                                    onChangeText={handleChange("password")}
                                    placeholder="Password"
                                    secureTextEntry
                                    textContentType="password"
                                />
                                <ErrorMessage error={errors.password} visible={touched.password} />
                            </View>
                            <View style={styles.buttonContainer}>
                                <RoundedButton
                                    bgColor={primary}
                                    label="Login"
                                    pressHandler={handleSubmit}
                                />
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </SafeScreen>
    );
}

export default LoginScreen;