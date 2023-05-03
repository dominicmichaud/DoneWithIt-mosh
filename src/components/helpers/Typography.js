import React from 'react';
import { Text } from 'react-native';

import StyleSheetFactory from '../../styles/helpers/helper.typography.style.js';
import theme from '../../config/theme';

const { darkGrey } = theme;

function Typography({ children, otherStyles, type, size = 18, color = darkGrey, uppercase = false }) {
    let styles = StyleSheetFactory.getSheet(color, size, uppercase);
    const { heading, body } = styles;

    return (
        <Text
            style={[type === 'heading' ? heading : body, otherStyles]}
        >
            {children}
        </Text>
    );
}

export default Typography;