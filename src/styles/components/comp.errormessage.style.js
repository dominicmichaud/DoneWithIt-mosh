import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
const { fonts: { heading_400 } } = theme;

export default StyleSheet.create({
    label: {
        fontSize: 18,
        fontFamily: heading_400,
        paddingLeft: 15,
        marginBottom: 10,
    },
});