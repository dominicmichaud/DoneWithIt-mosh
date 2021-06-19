import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from '../../styles/components/comp.listitem.style.js';
import theme from '../../config/theme';
import Typography from '../helpers/Typography.js';

const { black, lightGrey, medium } = theme;

function ListItem({ image, onPress, renderRightActions, subtitle, title }) {
    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <TouchableHighlight
                onPress={onPress}
                underlayColor={lightGrey}
            >
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
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;