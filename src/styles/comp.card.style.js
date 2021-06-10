import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        marginBottom: 20,
        backgroundColor: '#FFF',
        borderRadius: 15,
        shadowColor: "#cfcfcf",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.22,
        elevation: 3,
    },
    imageContainer: {
        overflow: 'hidden',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    cardContent: {
        padding: 20,
    },
    cardHeading: {
        marginBottom: 8,
    },
});
