import React, { useState } from 'react';
import { Button, FlatList, Modal, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PickerItem from './PickerItem';
import SafeScreen from '../helpers/SafeScreen';
import Typography from '../helpers/Typography';
import styles from '../../styles/forms/form.elements.style';
import theme from '../../config/theme';
const { black, medium, placeholderGrey } = theme;


function AppPicker({ icon, items, label, numberOfColumns = 1, PickerItemComponent = PickerItem, onSelectItem, placeholder, selectedItem, inputWidth = '100%', labelSize = 16 }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View>
                    {label && <Typography type="heading" size={labelSize} otherStyles={styles.inputLabel}>{label}</Typography>}
                    <View style={[styles.inputContainer, { width: inputWidth }]}>
                        {icon && <MaterialCommunityIcons name={icon} size={20} color={medium} style={styles.inputIcon} />}
                        <Typography type="heading" otherStyles={styles.pickerSelectedItemLabel} color={selectedItem ? black : placeholderGrey}>
                            {selectedItem ? selectedItem.label : placeholder}
                        </Typography>
                        <MaterialCommunityIcons name="chevron-down" size={20} color={medium} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <SafeScreen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </SafeScreen>
            </Modal>
        </>
    );
}

export default AppPicker;