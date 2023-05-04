import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Typography from '../helpers/Typography';
import styles from '../../styles/components/comp.textinput.style';
import theme from '../../config/theme';
const { medium } = theme;

function AppTextInput({ icon, label, labelSize = 16, ...otherProps }) {
    return (
        <View>
            {label && <Typography type="heading" size={labelSize} otherStyles={styles.label}>{label}</Typography>}
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={medium} style={styles.icon} />}
                <TextInput style={styles.textInput} {...otherProps} />
            </View>
        </View>
    );
}

export default AppTextInput;