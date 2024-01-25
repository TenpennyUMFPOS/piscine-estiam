// DashboardScreen.jsx

import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

const DashboardScreen = () => {
    // List of names with additional attributes
    const namesList = [
        { prenom: 'Devin', avatar: require('../assets/avatar/avatar1.png'), message: 'Hello, World!' },
        { prenom: 'Emily', avatar: require('../assets/avatar/av3.png'), message: 'Hello, World!' },
        { prenom: 'John', avatar: require('../assets/avatar/AV2.png'), message: 'Hello, World!' },
    ];

    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Content style={styles.item}>
                <Avatar.Image size={48} source={item.avatar} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.name}>{item.prenom}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={namesList}
                renderItem={renderItem}
                keyExtractor={(item) => item.prenom}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginTop: '50%',
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        width: width,
    },
    card: {
        backgroundColor: '#8d6e63',
        marginBottom: 15,
        borderRadius: 10,
        width: width - 40,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    name: {
        fontSize: 18,
        color: '#fff',
    },
    message: {
        color: '#ddd',
    },
});

export default DashboardScreen;
