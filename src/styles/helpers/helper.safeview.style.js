import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
    static getSheet(paddingTop) {
        return StyleSheet.create({
            safeView: {
                paddingTop: paddingTop,
                flex: 1,
            },
            view: {
                padding: 20
            },
        })
    }
}
