import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import StyleSheetFactory from '../../styles/components/comp.listitem.style.js';
import theme from '../../config/theme';
import Typography from '../helpers/Typography.js';

const { lightGrey, medium } = theme;

function ListItem({ image, IconComponent, onPress, renderRightActions, subtitle, title }) {
    let styles = StyleSheetFactory.getSheet('#FFF');

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
                    {IconComponent}
                    {image && <Image
                        source={image}
                        style={styles.image}
                    />}
                    <View
                        style={styles.detailsContainer}
                    >
                        <Typography
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