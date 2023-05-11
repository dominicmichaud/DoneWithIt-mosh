import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Icon from '../helpers/Icon';
import styles from '../../styles/forms/form.elements.style';
import Typography from '../helpers/Typography';
import theme from '../../config/theme';
const { whiteLight } = theme;

function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={[styles.pickerCategoryContainer]}>
            <TouchableOpacity onPress={onPress}>
                <Icon backgroundColor={item.bgColor} name={item.icon} size={80} color={whiteLight} />
                <Typography type='heading' size={16} otherStyles={styles.pickerCategoryLabel}>
                    {item.label}
                </Typography>
            </TouchableOpacity>
        </View>
    );
}

export default CategoryPickerItem;