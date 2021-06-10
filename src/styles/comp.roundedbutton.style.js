import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
    static getSheet(bgColor, marginBottom = 0) {
        return StyleSheet.create({
            button: {
                width: '100%',
                height: 70,
                backgroundColor: bgColor,
                marginBottom: marginBottom,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
            },
        })
    }
}
