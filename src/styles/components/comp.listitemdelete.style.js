import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
const { danger } = theme;

export default StyleSheet.create({
    container: {
        backgroundColor: danger,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
});