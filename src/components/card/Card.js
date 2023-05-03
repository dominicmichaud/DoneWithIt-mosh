import React from 'react';
import { Image, View } from 'react-native';

import styles from '../../styles/components/comp.card.style.js';
import theme from '../../config/theme';
import Typography from '../helpers/Typography.js';

const { darkGrey, secondary } = theme;

function Card({ cardImagePath, title, subtitle, titleColor = darkGrey, subtitleColor = secondary, uppercase = false }) {
    return (
        <View
            style={styles.card}
        >
            <View
                style={styles.imageContainer}
            >
                <Image
                    source={cardImagePath}
                    style={styles.cardImage}
                    resizeMode="cover"
                />
            </View>
            <View
                style={styles.cardContent}
            >
                <Typography
                    color={titleColor}
                    otherStyles={styles.cardHeading}
                    type="heading"
                    uppercase={uppercase}
                >
                    {title}
                </Typography>
                <Typography
                    color={subtitleColor}
                    size={16}
                    type="heading"
                >
                    {subtitle}
                </Typography>
            </View>
        </View>
    );
}

export default Card;