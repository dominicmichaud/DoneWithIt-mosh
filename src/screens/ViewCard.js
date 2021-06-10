import React from 'react';
import { View } from 'react-native';
import Card from '../components/card/Card';

function ViewCard(props) {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#f8f4f4',
                padding: 20,
                paddingTop: 100,
            }}
        >
            <Card
                cardImagePath={
                    require('../assets/unsplash/bin-thi-u-k-yVEfqJotg-unsplash.jpg')
                }
                title="Fashionable Shirt with motifs!"
                subtitle="$80"
            />
            <Card
                cardImagePath={
                    require('../assets/unsplash/jacket.jpg')
                }
                title="Jacket for Sale"
                subtitle="$100"
            />
        </View>
    );
}

export default ViewCard;