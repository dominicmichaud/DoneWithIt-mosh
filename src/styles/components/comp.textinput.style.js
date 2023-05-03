import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
const { lightGrey } = theme;

export default StyleSheet.create({
    container: {
        backgroundColor: lightGrey,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
});