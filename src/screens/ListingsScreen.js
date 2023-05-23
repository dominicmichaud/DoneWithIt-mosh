import React from 'react';
import { FlatList } from 'react-native';

import Card from '../components/card/Card';
import routes from '../navigation/routes';
import SafeScreen from '../components/helpers/SafeScreen';
import styles from '../styles/screens/screen.listings.style';

const listings = [
    {
        id: 1,
        image: require('../assets/unsplash/jacket.jpg'),
        price: 100,
        title: "Red Jacket for sale",
    },
    {
        id: 2,
        image: require('../assets/unsplash/Best-Sectional-Sofa.jpeg'),
        price: 1000,
        title: "Couch in great condition",
    },
]

function ListingsScreen({ navigation }) {
    return (
        <SafeScreen padding style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        cardImagePath={item.image}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        subtitle={"$" + item.price}
                        title={item.title}
                    />
                }
            />
        </SafeScreen>
    );
}

export default ListingsScreen;