import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from '../../styles/components/comp.pickeritem.style';
import Typography from '../helpers/Typography';

function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Typography type='heading' otherStyles={styles.text}>
                {label}
            </Typography>
        </TouchableOpacity>
    );
}

export default PickerItem;