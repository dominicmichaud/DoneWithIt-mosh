import React from 'react';
import { View, Text } from 'react-native';

import Constants from 'expo-constants';
import StyleSheetFactory from '../../styles/helpers/helper.offlinenotice.style';
import Typography from './Typography';

export default function OfflineNotice() {
    let styles = StyleSheetFactory.getSheet(Constants.statusBarHeight);

    return (
        <View styles={styles.container}>
            <Typography>
                No Internet Connection
            </Typography>
        </View>
    )
}
