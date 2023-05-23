import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles/components/comp.listingbutton.style';
import theme from '../config/theme';
const { white } = theme;

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons color={white} name="plus-circle" size={45} />
            </View>
        </TouchableOpacity>
    );
}

export default NewListingButton;