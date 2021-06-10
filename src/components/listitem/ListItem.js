import React from 'react';
import { Image, View } from 'react-native';

import styles from '../../styles/comp.listitem.style.js';
import theme from '../../config/theme';
import Typography from '../helpers/Typography.js';

const { black, medium } = theme;

function ListItem({ image, subtitle, title }) {
    return (
        <View
            style={styles.container}
        >
            <Image
                source={image}
                style={styles.image}
            />
            <View>
                <Typography
                    color={black}
                    otherStyles={styles.detailsHeading}
                    size={16}
                    type="heading"
                >
                    {title}
                </Typography>
                <Typography
                    color={medium}
                    otherStyles={styles.detailsHeading}
                    size={16}
                >
                    {subtitle}
                </Typography>
            </View>
        </View>
    );
}

export default ListItem;