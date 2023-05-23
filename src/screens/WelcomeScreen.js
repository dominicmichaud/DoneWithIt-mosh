import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import AnimatableElement from '../components/helpers/AnimatableElement';
import AppLogoPath from '../assets/logo-red.png';
import RoundedButton from '../components/buttons/RoundedButton';
import routes from '../navigation/routes';
import styles from '../styles/screens/screen.welcome.style.js';
import theme from '../config/theme';
import Typography from '../components/helpers/Typography';
import WelcomeBGPath from '../assets/background.jpg';

function WelcomeScreen({ navigation }) {
    const { logoLabelColor, primary, secondary } = theme;

    return (
        <ImageBackground
            source={WelcomeBGPath}
            style={styles.background}
            blurRadius={5}
        >
            <View
                style={styles.logoContainer}
            >
                <AnimatableElement
                    animationName="fadeIn"
                >
                    <View
                        style={styles.logoLabelContainer}
                    >
                        <Image
                            source={AppLogoPath}
                            style={styles.appLogo}
                        />
                        <Typography
                            color={logoLabelColor}
                            otherStyles={styles.logoLabel}
                            size={24}
                            type="heading"
                        >
                            Sell What You Don't Need
                        </Typography>
                    </View>
                </AnimatableElement>
            </View>
            <View
                style={styles.buttonContainer}
            >
                <AnimatableElement
                    animationName="fadeInUp"
                >
                    <RoundedButton
                        bgColor={primary}
                        label="Login"
                        marginBottom={8}
                        pressHandler={() => navigation.navigate(routes.LOGIN)}
                    />
                </AnimatableElement>
                <AnimatableElement
                    animationName="fadeInUp"
                >
                    <RoundedButton
                        bgColor={secondary}
                        label="Register"
                        pressHandler={() => navigation.navigate(routes.REGISTER)}
                    />
                </AnimatableElement>
            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;