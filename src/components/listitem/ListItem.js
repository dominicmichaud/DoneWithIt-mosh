import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import StyleSheetFactory from '../../styles/components/comp.listitem.style.js';
import theme from '../../config/theme';
import Typography from '../helpers/Typography.js';

const { lightGrey, medium } = theme;

function ListItem({ image, IconComponent, onPress, renderRightActions, subtitle, title, showChevrons = false }) {
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
                        style={[styles.detailsContainer, showChevrons ? styles.detailsFlex : null]}
                    >
                        <Typography
                            numberOfLines={1}
                            type="heading"
                        >
                            {title}
                        </Typography>
                        {subtitle && <Typography
                            color={medium}
                            numberOfLines={2}
                            otherStyles={styles.detailsHeading}
                            size={16}
                        >
                            {subtitle}
                        </Typography>}
                    </View>
                    {showChevrons && <MaterialCommunityIcons name="chevron-right" size={25} color={medium} />}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;