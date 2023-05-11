import React from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, AppSubmitButton } from '../components/form';
import SafeScreen from '../components/helpers/SafeScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().positive().min(1).max(10000).label("Price"),
    category: Yup.string().required().label("Category"),
    description: Yup.string().label("Description")
});

const categories = [
    {
        label: "Furniture",
        value: 1
    },
    {
        label: "Clothing",
        value: 2
    },
    {
        label: "Cameras",
        value: 3
    },
];

function ListingEditScreen(props) {
    return (
        <SafeScreen>
            <View>
                <AppForm
                    initialValues={{ category: null, title: '', price: 0, description: '' }}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize
                        autoCorrect={false}
                        maxLength={255}
                        name="title"
                        placeholder="Title"
                    />
                    <AppFormField
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={8}
                        name="price"
                        placeholder="Price"
                    />
                    <AppFormPicker
                        items={categories}
                        name="category"
                        placeholder="Category"
                    />
                    <AppFormField
                        autoCorrect={false}
                        maxLength={255}
                        multiline
                        name="description"
                        numberOfLines={3}
                        placeholder="Description"
                    />
                    <AppSubmitButton label="Post" />
                </AppForm>
            </View>
        </SafeScreen>
    );
}

export default ListingEditScreen;