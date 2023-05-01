import React from 'react';
import { FlatList, View } from 'react-native';
import Icon from '../components/helpers/Icon';
import ListItem from '../components/listitem/ListItem';
import ListItemSeparator from '../components/helpers/ListItemSeparator';
import SafeScreen from '../components/helpers/SafeScreen';

import styles from '../styles/screens/screen.account.style';
import theme from '../config/theme';

const { primary, secondary, logout } = theme;
const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: secondary
        }
    }
];


function AccountScreen(props) {
    return (
        <SafeScreen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Dominic Michaud"
                    subtitle="dominic.michaud@codeboxx.ca"
                    image={require('../assets/DALL-E-2023-05-01-dominic_200px.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon
                        name="logout"
                        backgroundColor={logout}
                    />
                }
            />
        </SafeScreen>
    );
}

export default AccountScreen;