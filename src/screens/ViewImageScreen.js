import React from 'react';
import { Image, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ChairPath from '../assets/chair.jpg';
import styles from '../styles/screens/screen.viewimage.style.js';

function ViewImageScreen(props) {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.closeIcon}
            >
                <MaterialCommunityIcons
                    color="#FFF"
                    name="close"
                    size={35}
                />
            </View>
            <View
                style={styles.deleteIcon}
            >
                <MaterialCommunityIcons
                    color="#FFF"
                    name="trash-can-outline"
                    size={35}
                />
            </View>
            <Image
                resizeMode="contain"
                source={ChairPath}
                style={styles.image}
            />
        </View>
    );
}

export default ViewImageScreen;