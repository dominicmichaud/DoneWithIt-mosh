import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import AppPicker from '../picker/AppPicker';
import ErrorMessage from './ErrorMessage';
import styles from '../../styles/forms/form.elements.style';

function AppFormPicker({ name, numberOfColumns, PickerItemComponent, ...otherProps }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <View style={styles.formControl}>
            <AppPicker
                numberOfColumns={numberOfColumns}
                onSelectItem={item => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values['category']}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}

export default AppFormPicker;