import React from 'react';
import { Text } from 'react-native';

import StyleSheetFactory from '../../styles/helper.typography.style.js';

function Typography({ children, color, otherStyles, size, type }) {
    let styles = StyleSheetFactory.getSheet(color, size);
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