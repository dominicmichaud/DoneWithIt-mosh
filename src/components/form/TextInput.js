import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Typography from '../helpers/Typography';
import styles from '../../styles/forms/form.elements.style';
import theme from '../../config/theme';
const { medium } = theme;

function AppTextInput({ icon, label, labelSize = 16, inputWidth = '100%', ...otherProps }) {
    return (
        <View>
            {label && <Typography type="heading" size={labelSize} otherStyles={styles.inputLabel}>{label}</Typography>}
            <View style={[styles.inputContainer, { width: inputWidth }]}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={medium} style={styles.inputIcon} />}
                <TextInput style={styles.textInput} {...otherProps} />
            </View>
        </View>
    );
}

export default AppTextInput;