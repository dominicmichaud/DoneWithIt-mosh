import React from 'react';
import { SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import StyleSheetFactory from '../../styles/helpers/helper.safeview.style.js';

function SafeScreen({ children }) {
    let styles = StyleSheetFactory.getSheet(Constants.statusBarHeight);

    return (
        <SafeAreaView
            style={styles.safeView}
        >
            {children}
        </SafeAreaView>
    );
}

export default SafeScreen;