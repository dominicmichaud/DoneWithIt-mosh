import React from 'react';
import { Image, View } from 'react-native';

import styles from '../../styles/components/comp.card.style.js';
import theme from '../../config/theme';
import Typography from '../helpers/Typography.js';

const { black, secondary } = theme;

function Card({ cardImagePath, title, subtitle }) {
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
                    color={black}
                    otherStyles={styles.cardHeading}
                    size={16}
                    type="heading"
                >
                    {title}
                </Typography>
                <Typography
                    color={secondary}
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