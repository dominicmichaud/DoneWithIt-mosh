import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import TextInput from './TextInput';
import ErrorMessage from './ErrorMessage';
import styles from '../../styles/forms/form.elements.style';

function AppFormField({ name, width, ...otherProps }) {
    const { errors, handleChange, setFieldTouched, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <View style={styles.formControl}>
                <TextInput
                    onBlur={() => setFieldTouched(name)}
                    onChangeText={text => setFieldValue(name, text)}
                    value={values[name]}
                    width={width}
                    {...otherProps}
                />
                <ErrorMessage error={errors[name]} visible={touched[name]} />
            </View>
        </>
    );
}

export default AppFormField;