import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
const { darkGrey, lightGrey, fonts: { heading_400 } } = theme;

export default StyleSheet.create({
    // General
    buttonContainer: {
        marginTop: 5
    },
    formControl: {
        marginBottom: 5,
    },
    // Input
    inputContainer: {
        backgroundColor: lightGrey,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    inputIcon: {
        marginRight: 10,
    },
    inputLabel: {
        paddingLeft: 15,
    },
    textInput: {
        fontSize: 18,
        fontFamily: heading_400,
        color: darkGrey,
    },
    // Picker
    pickerCategoryContainer: {
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 15,
        width: '33%'
    },
    pickerCategoryLabel: {
        marginTop: 5,
        textAlign: 'center'
    },
    pickerSelectedItemLabel: {
        flex: 1,
    },
    pickerListItems: {
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
});