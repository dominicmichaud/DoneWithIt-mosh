import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../styles/components/comp.listitemdelete.style.js';
import theme from '../../config/theme';
const { white } = theme;

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View
                style={styles.container}
            >
                <MaterialCommunityIcons
                    color={white}
                    size={35}
                    name="trash-can"
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ListItemDeleteAction;