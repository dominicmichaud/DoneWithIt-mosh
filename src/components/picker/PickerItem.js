import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from '../../styles/forms/form.elements.style';
import Typography from '../helpers/Typography';

function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Typography type='heading' otherStyles={styles.pickerListItems}>
                {item.label}
            </Typography>
        </TouchableOpacity>
    );
}

export default PickerItem;