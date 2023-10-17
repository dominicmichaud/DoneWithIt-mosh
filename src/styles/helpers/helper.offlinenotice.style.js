import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
const { primary } = theme;

export default class StyleSheetFactory {
    static getSheet(positionTop) {
        return StyleSheet.create({
            container: {
                alignItems: 'center',
                backgroundColor: primary,
                height: 50,
                elevation: 1,
                justifyContent: 'center',
                position: 'absolute',
                top: positionTop,
                left: 0,
                width: '100%',
                zIndex: 1,
            },
        })
    }
}