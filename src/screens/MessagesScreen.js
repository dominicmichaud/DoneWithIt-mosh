import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItemSeparator from '../components/helpers/ListItemSeparator';
import SafeScreen from '../components/helpers/SafeScreen';
import ListItem from '../components/listitem/ListItem';
import ListItemDeleteAction from '../components/listitem/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require('../assets/unsplash/hossein-rezaei--paUf05gaUs-unsplash.jpg'),
    },
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = message => {
        setMessages(messages.filter((m) => m.id !== message.id));
    }

    return (
        <SafeScreen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                ItemSeparatorComponent={ListItemSeparator}
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
                    />
                )}
            />
        </SafeScreen>
    );
}

export default MessagesScreen;