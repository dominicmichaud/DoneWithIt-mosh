import React from 'react';
import { TouchableOpacity } from 'react-native';

import StyleSheetFactory from '../../styles/components/comp.roundedbutton.style.js';
import theme from '../../config/theme';
import Typography from '../helpers/Typography.js';

const { whiteLight } = theme;

function RoundedButton({ bgColor, marginBottom, label, pressHandler, ...otherProps }) {
    let styles = StyleSheetFactory.getSheet(bgColor, marginBottom);

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={pressHandler}
            {...otherProps}
        >
            <Typography
                color={whiteLight}
                type="heading"
                uppercase
            >
                {label}
            </Typography>
        </TouchableOpacity>
    );
}

export default RoundedButton;