import React, { useRef } from 'react';
import { ScrollView, View } from 'react-native';

import ImageInput from './ImageInput';
import styles from '../../styles/forms/form.elements.style';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
    const scrollView = useRef();

    return (
        <View style={styles.imageListView}>
            <ScrollView
                horizontal
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.imageListContainer}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.imageListImage}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}
                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

export default ImageInputList;