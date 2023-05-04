import React from 'react';
import { Text } from 'react-native';

import StyleSheetFactory from '../../styles/helpers/helper.typography.style.js';
import theme from '../../config/theme';

const { darkGrey } = theme;

function Typography({ children, otherStyles, type, size = 18, color = darkGrey, uppercase = false, bold = false }) {
    let styles = StyleSheetFactory.getSheet(color, size, uppercase);
    const { heading700, heading400, body } = styles;
    let heading_style = heading400;

    if (bold) {
        heading_style = heading700;
    }

    return (
        <Text
            style={[type === 'heading' ? heading_style : body, otherStyles]}
        >
            {children}
        </Text>
    );
}

export default Typography;