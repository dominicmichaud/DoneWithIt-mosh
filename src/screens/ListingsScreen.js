import React from 'react';
import { FlatList } from 'react-native'

import SafeScreen from '../components/helpers/SafeScreen';

const listings = [
    {

    }
]

function ListingsScreen(props) {
    return (
        <SafeScreen>
            <FlatList
                data={listings}
            />
        </SafeScreen>
    );
}

export default ListingsScreen;