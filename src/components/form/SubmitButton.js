import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import RoundedButton from '../buttons/RoundedButton';
import styles from '../../styles/forms/form.elements.style';
import theme from '../../config/theme';

function AppSubmitButton({ label }) {
    const { handleSubmit } = useFormikContext();
    const { primary } = theme;

    return (
        <View style={styles.buttonContainer}>
            <RoundedButton
                bgColor={primary}
                label={label}
                pressHandler={handleSubmit}
            />
        </View>
    );
}

export default AppSubmitButton;