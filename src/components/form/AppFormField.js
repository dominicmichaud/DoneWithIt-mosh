import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
import styles from '../../styles/forms/form.elements.style';

function AppFormField({ name, ...otherProps }) {
    const { errors, handleChange, setFieldTouched, touched } = useFormikContext();

    return (
        <>
            <View style={styles.formControl}>
                <AppTextInput
                    onBlur={() => setFieldTouched(name)}
                    onChangeText={handleChange(name)}
                    {...otherProps}
                />
                <ErrorMessage error={errors[name]} visible={touched[name]} />
            </View>
        </>
    );
}

export default AppFormField;