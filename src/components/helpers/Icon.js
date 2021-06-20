import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import StyleSheetFactory from '../../styles/helpers/helper.icon.style.js';

function Icon({
    name,
    size = 40,
    backgroundColor = '#177E89',
    iconColor = '#FFF'
}) {
    let styles = StyleSheetFactory.getSheet(backgroundColor, size);

    return (
        <View
            style={styles.icon}
        >
            <MaterialCommunityIcons
                name={name}
                color={iconColor}
                size={size * 0.5}
            />
        </View>
    );
}

export default Icon;