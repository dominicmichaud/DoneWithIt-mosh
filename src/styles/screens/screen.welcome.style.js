import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 20,
        paddingBottom: 24,
        justifyContent: 'flex-end',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appLogo: {
        width: 100,
        height: 100,
    },
    logoLabelContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoLabel: {
        marginTop: 16,
    }
});