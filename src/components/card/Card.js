import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { Image } from 'react-native-expo-image-cache';
import styles from '../../styles/components/comp.card.style.js';
import theme from '../../config/theme';
import Typography from '../helpers/Typography.js';

const { darkGrey, secondary } = theme;

function Card({ imageUrl, onPress, title, subtitle, thumbnailUrl, titleColor = darkGrey, subtitleColor = secondary, uppercase = false }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View
                style={styles.card}
            >
                <View
                    style={styles.imageContainer}
                >
                    <Image
                        preview={{ uri: thumbnailUrl }}
                        resizeMode="cover"
                        style={styles.cardImage}
                        tint="light"
                        uri={imageUrl}
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
        </TouchableWithoutFeedback>
    );
}

export default Card;