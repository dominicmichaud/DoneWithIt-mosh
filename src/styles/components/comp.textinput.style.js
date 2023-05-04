import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
const { darkGrey, lightGrey, fonts: { heading_400 } } = theme;

export default StyleSheet.create({
    container: {
        backgroundColor: lightGrey,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        marginBottom: 25,
    },
    icon: {
        marginRight: 10,
    },
    label: {
        paddingLeft: 15,
    },
    textInput: {
        fontSize: 18,
        fontFamily: heading_400,
        color: darkGrey,
    },
    picker: {
        flex: 1,
    },
});