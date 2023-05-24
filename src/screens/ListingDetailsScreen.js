import React from 'react';
import { Image, View } from 'react-native';
import ListItem from '../components/listitem/ListItem';
import Typography from '../components/helpers/Typography';

import styles from '../styles/screens/screen.listingdetails.style';
import theme from '../config/theme';

const { secondary } = theme;

function ListingDetailsScreen({ route }) {
    const listing = route.params;

    console.log('listing', listing)

    return (
        <View>
            <Image
                source={{ uri: listing.images[0].url }}
                style={styles.image}
            />
            <View
                style={styles.detailsContainer}
            >
                <Typography
                    otherStyles={styles.cardHeading}
                    size={20}
                    type="heading"
                >
                    {listing.title}
                </Typography>
                <Typography
                    color={secondary}
                    type="heading"
                >
                    ${listing.price}
                </Typography>
                <View
                    style={styles.userContainer}
                >
                    <ListItem
                        image={require('../assets/unsplash/hossein-rezaei--paUf05gaUs-unsplash.jpg')}
                        title="Rezaei Hossein"
                        subtitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

export default ListingDetailsScreen;