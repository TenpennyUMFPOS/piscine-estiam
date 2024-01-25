import React from 'react';
import { View, Text } from 'react-native';

const MyListComponent = () => {
    // List of names
    const namesList = [
        { prenom: 'Devin' },
        { prenom: 'Dan' },
        { prenom: 'Dominic' },
        { prenom: 'Jackson' },
        { prenom: 'James' },
        { prenom: 'Joel' },
        { prenom: 'John' },
        { prenom: 'Jillian' },
        { prenom: 'Jimmy' },
        { prenom: 'Julie' },
    ];

    return (
        <View>
            {namesList.map((item, index) => (
                <Text key={index}>{item.prenom}</Text>
            ))}
        </View>
    );
};

export default MyListComponent;
