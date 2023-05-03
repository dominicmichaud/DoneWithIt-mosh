import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
const { heading, darkGrey, lightGrey } = theme;

export default StyleSheet.create({
    container: {
        backgroundColor: lightGrey,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    label: {
        paddingLeft: 15,
    },
    textInput: {
        fontSize: 18,
        fontFamily: heading,
        color: darkGrey,
    },
});