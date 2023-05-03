import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
const { fonts: { heading, body } } = theme;

export default class StyleSheetFactory {
    static getSheet(color, size, isUppercase) {
        return StyleSheet.create({
            heading: {
                fontFamily: heading,
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
