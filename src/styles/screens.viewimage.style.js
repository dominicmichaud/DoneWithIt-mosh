import { StyleSheet } from 'react-native';

import theme from '../config/theme';
const { black } = theme;

export default StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
    },
    container: {
        flex: 1,
        backgroundColor: black,
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});