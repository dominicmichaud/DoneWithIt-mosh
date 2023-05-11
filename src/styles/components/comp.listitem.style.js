import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
    static getSheet(bgColor = 'transparent') {
        return StyleSheet.create({
            container: {
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
                backgroundColor: bgColor
            },
            detailsContainer: {
                justifyContent: 'center',
                marginLeft: 10,
            },
            detailsFlex: {
                flex: 1,
            },
            detailsHeading: {
                marginTop: 6,
            },
            image: {
                width: 70,
                height: 70,
                borderRadius: 35,
            },
        })
    }
}