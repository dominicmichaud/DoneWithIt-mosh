import React from 'react';
import { TouchableOpacity } from 'react-native';

import StyleSheetFactory from '../../styles/components/comp.roundedbutton.style.js';
import theme from '../../config/theme';
import Typography from '../helpers/Typography.js';

const { whiteLight } = theme;

function RoundedButton({ bgColor, marginBottom, label, pressHandler }) {
    let styles = StyleSheetFactory.getSheet(bgColor, marginBottom);

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={pressHandler}
        >
            <Typography
                color={whiteLight}
                size={18}
                type="heading"
            >
                {label}
            </Typography>
        </TouchableOpacity>
    );
}

export default RoundedButton;