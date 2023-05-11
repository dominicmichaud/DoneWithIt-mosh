import React from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, AppSubmitButton } from '../components/form';
import CategoryPickerItem from '../components/picker/CategoryPickerItem';
import SafeScreen from '../components/helpers/SafeScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().positive().min(1).max(10000).label("Price"),
    category: Yup.string().required().label("Category"),
    description: Yup.string().label("Description")
});

const categories = [
    {
        bgColor: '#fc5c65',
        icon: 'floor-lamp',
        label: "Furniture",
        value: 1
    },
    {
        bgColor: '#fd9644',
        icon: 'car',
        label: "Cars",
        value: 2
    },
    {
        bgColor: '#fed330',
        icon: 'camera',
        label: "Cameras",
        value: 3
    },
    {
        bgColor: '#26de81',
        icon: 'cards',
        label: "Games",
        value: 4
    },
    {
        bgColor: '#2bcbba',
        icon: 'shoe-heel',
        label: "Clothing",
        value: 5
    },
    {
        bgColor: '#45aaf2',
        icon: 'basketball',
        label: "Sports",
        value: 6
    },
    {
        bgColor: '#4b7bec',
        icon: 'headphones',
        label: "Movies & Music",
        value: 7
    },
    {
        bgColor: '#9b67e2',
        icon: 'book-open-variant',
        label: "Books",
        value: 8
    },
    {
        bgColor: '#7c8ca1',
        icon: 'application',
        label: "Others",
        value: 9
    },
];

function ListingEditScreen(props) {
    return (
        <SafeScreen padding>
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
                        numberOfColumns={3}
                        PickerItemComponent={CategoryPickerItem}
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