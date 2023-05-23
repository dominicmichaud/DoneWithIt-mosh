import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
const { primary, white } = theme;

const defaultSize = 80;

export default StyleSheet.create({
    container: {
        backgroundColor: primary,
        borderColor: white,
        borderRadius: defaultSize / 2,
        borderWidth: 10,
        bottom: 20,
        width: defaultSize,
        height: defaultSize,
        alignItems: 'center',
        justifyContent: 'center',
    },
});