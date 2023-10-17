import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

import ActivityIndicator from '../components/helpers/ActivityIndicator';
import Card from '../components/card/Card';
import ErrorGraphic from '../components/helpers/ErrorGraphic';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import SafeScreen from '../components/helpers/SafeScreen';
import ServerDown from '../assets/undraw_server_down_s4lk.png';
import styles from '../styles/screens/screen.listings.style';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
    const { data: lisitings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <SafeScreen padding style={styles.screen}>
            {error && <ErrorGraphic buttonLabel="Retry" graphicUrl={ServerDown} title="Couldn't retrieve the Listings." onPress={loadListings} />}
            <ActivityIndicator visible={loading} />
            <FlatList
                data={lisitings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        subtitle={"$" + item.price}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                        title={item.title}
                    />
                }
            />
        </SafeScreen>
    );
}

export default ListingsScreen;