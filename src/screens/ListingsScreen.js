import React from 'react';
import { FlatList } from 'react-native';

import Card from '../components/card/Card';
import SafeScreen from '../components/helpers/SafeScreen';
import styles from '../styles/screens/screen.listings.style';

const listings = [
    {
        id: 1,
        title: "Red Jacket for sale",
        price: 100,
        image: require('../assets/unsplash/jacket.jpg'),
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 1000,
        image: require('../assets/unsplash/Best-Sectional-Sofa.jpeg'),
    },
]

function ListingsScreen(props) {
    return (
        <SafeScreen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item: { title, price, image } }) =>
                    <Card
                        title={title}
                        subtitle={"$" + price}
                        cardImagePath={image}
                    />
                }
            />
        </SafeScreen>
    );
}

export default ListingsScreen;