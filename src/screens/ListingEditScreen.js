import React from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import { Form, FormField, FormImagePicker, FormPicker, SubmitButton } from '../components/form';
import CategoryPickerItem from '../components/picker/CategoryPickerItem';
import SafeScreen from '../components/helpers/SafeScreen';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().positive().min(1).max(10000).label("Price"),
    category: Yup.string().required().label("Category"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select at least one image.")
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
    const location = useLocation();

    return (
        <SafeScreen padding>
            <View>
                <Form
                    initialValues={{ category: null, title: '', price: 0, description: '', images: [] }}
                    onSubmit={values => console.log(location)}
                    validationSchema={validationSchema}
                >
                    <FormImagePicker name="images" />
                    <FormField
                        autoCapitalize="words"
                        autoCorrect={false}
                        maxLength={255}
                        name="title"
                        placeholder="Title"
                    />
                    <FormField
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={8}
                        name="price"
                        placeholder="Price"
                    />
                    <FormPicker
                        items={categories}
                        name="category"
                        numberOfColumns={3}
                        PickerItemComponent={CategoryPickerItem}
                        placeholder="Category"
                    />
                    <FormField
                        autoCorrect={false}
                        maxLength={255}
                        multiline
                        name="description"
                        numberOfLines={3}
                        placeholder="Description"
                    />
                    <SubmitButton label="Post" />
                </Form>
            </View>
        </SafeScreen>
    );
}

export default ListingEditScreen;