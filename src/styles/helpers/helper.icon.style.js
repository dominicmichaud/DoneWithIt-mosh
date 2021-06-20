import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
    static getSheet(backgroundColor, size) {
        return StyleSheet.create({
            icon: {
                alignItems: 'center',
                justifyContent: 'center',
                width: size,
                height: size,
                borderRadius: (size / 2),
                backgroundColor,
            },
        })
    }
}
