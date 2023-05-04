import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
const { fonts: { heading_400, heading_700, body } } = theme;

export default class StyleSheetFactory {
    static getSheet(color, size, isUppercase) {
        return StyleSheet.create({
            heading400: {
                fontFamily: heading_400,
                fontSize: size,
                color: color,
                textTransform: isUppercase ? 'uppercase' : 'none'
            },
            heading700: {
                fontFamily: heading_700,
                fontSize: size,
                color: color,
                textTransform: isUppercase ? 'uppercase' : 'none'
            },
            body: {
                fontFamily: body,
                fontSize: size,
                color: color,
            },
        })
    }
}
