import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItemSeparator from '../components/listitem/ListItemSeparator';
import SafeScreen from '../components/helpers/SafeScreen';
import ListItem from '../components/listitem/ListItem';
import ListItemDeleteAction from '../components/listitem/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium at blanditiis placeat, sint nam optio? Aperiam, qui minus voluptate vero magni nisi voluptatibus cumque, dolore ad, corrupti doloremque iure!",
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium at blanditiis placeat, sint nam optio?",
        image: require('../assets/unsplash/hossein-rezaei--paUf05gaUs-unsplash.jpg'),
    },
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter((m) => m.id !== message.id));
    }

    return (
        <SafeScreen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: "Title 3",
                            description: "D3 lorem ipsum badabing badboom",
                            image: require('../assets/unsplash/hossein-rezaei--paUf05gaUs-unsplash.jpg'),
                        },
                    ])
                }}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                        showChevrons
                    />
                )}
            />
        </SafeScreen>
    );
}

export default MessagesScreen;