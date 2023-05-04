import React, { useState } from 'react';
import { Button, FlatList, Modal, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PickerItem from './PickerItem';
import SafeScreen from '../helpers/SafeScreen';
import Typography from '../helpers/Typography';
import styles from '../../styles/components/comp.textinput.style';
import theme from '../../config/theme';
const { medium } = theme;


function AppPicker({ icon, items, label, onSelectItem, placeholder, selectedItem, labelSize = 16 }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View>
                    {label && <Typography type="heading" size={labelSize} otherStyles={styles.label}>{label}</Typography>}
                    <View style={styles.container}>
                        {icon && <MaterialCommunityIcons name={icon} size={20} color={medium} style={styles.icon} />}
                        <Typography type="heading" otherStyles={styles.picker}>
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
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
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