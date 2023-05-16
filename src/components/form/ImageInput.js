import React, { useEffect } from 'react';
import { Alert, Image, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import styles from '../../styles/forms/form.elements.style';
import theme from '../../config/theme';
const { medium } = theme;

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) alert('You need to enabled permission to access the Library.');
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            {
                text: 'Yes',
                onPress: () => onChangeImage(null)
            },
            {
                text: 'No'
            }
        ])
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });

            if (!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.log('Error reading an image', error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.imageInput}>
                {imageUri ?
                    <Image source={{ uri: imageUri }} style={styles.image} /> :
                    <MaterialCommunityIcons name="camera" size={35} color={medium} />
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ImageInput;