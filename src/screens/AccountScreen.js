import React from 'react';
import { FlatList, View } from 'react-native';
import Icon from '../components/helpers/Icon';
import ListItem from '../components/listitem/ListItem';
import ListItemSeparator from '../components/listitem/ListItemSeparator';
import SafeScreen from '../components/helpers/SafeScreen';

import routes from '../navigation/routes';
import styles from '../styles/screens/screen.account.style';
import theme from '../config/theme';

const { primary, secondary, logout } = theme;
const menuItems = [
    {
        icon: {
            name: "format-list-bulleted",
            backgroundColor: primary
        },
        title: "My Listings",
    },
    {
        icon: {
            name: "email",
            backgroundColor: secondary
        },
        targetScreen: routes.MESSAGES,
        title: "My Messages",
    }
];


function AccountScreen({ navigation }) {
    return (
        <SafeScreen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    image={require('../assets/DALL-E-2023-05-01-dominic_200px.jpg')}
                    subtitle="dominic.michaud@codeboxx.ca"
                    title="Dominic Michaud"
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            IconComponent={
                                <Icon
                                    backgroundColor={item.icon.backgroundColor}
                                    name={item.icon.name}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                            title={item.title}
                        />
                    }
                />
            </View>
            <ListItem
                IconComponent={
                    <Icon
                        backgroundColor={logout}
                        name="logout"
                    />
                }
                title="Log Out"
            />
        </SafeScreen>
    );
}

export default AccountScreen;