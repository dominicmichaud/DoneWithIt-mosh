import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants';

import StyleSheetFactory from '../../styles/helpers/helper.safeview.style.js';

function SafeScreen({ children, style, padding = false }) {
    let styles = StyleSheetFactory.getSheet(Constants.statusBarHeight);

    return (
        <SafeAreaView
            style={[styles.safeView, style]}
        >
            <View style={[styles.view, padding ? styles.viewPadding : null]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

export default SafeScreen;