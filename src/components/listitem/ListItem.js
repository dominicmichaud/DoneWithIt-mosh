import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from '../../styles/components/comp.listitem.style.js';
import theme from '../../config/theme';
import Typography from '../helpers/Typography.js';

const { black, lightGrey, medium } = theme;

function ListItem({ image, ImageComponent, onPress, renderRightActions, subtitle, title }) {
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
                    {ImageComponent}
                    {image && <Image
                        source={image}
                        style={styles.image}
                    />}
                    <View
                        style={styles.detailsContainer}
                    >
                        <Typography
                            color={black}
                            size={18}
                            type="heading"
                        >
                            {title}
                        </Typography>
                        {subtitle && <Typography
                            color={medium}
                            otherStyles={styles.detailsHeading}
                            size={16}
                        >
                            {subtitle}
                        </Typography>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;