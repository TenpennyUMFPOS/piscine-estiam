import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RegistrationScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegistrationPress = () => {

        setLoading(true);


        setTimeout(() => {

            setLoading(false);


            navigation.navigate('Dashboard');
        }, 2000);
    };



    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" color="#8d6e63" style={styles.loadingIndicator} />}

            <Text style={styles.title}>Registration</Text>

            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Your Surname"
                value={surname}
                onChangeText={(text) => setSurname(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Your Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Your Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />


            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry
            />



            <TouchableOpacity style={styles.button} onPress={handleRegistrationPress}>
                <Text style={styles.buttonText}>Register  <FontAwesome name="coffee" size={24} color="#fff" /></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    loadingIndicator: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#8d6e63',
    },
    input: {
        height: 40,
        borderColor: '#8d6e63',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        width: '100%',
    },
    coffeeButton: {
        backgroundColor: '#8d6e63',
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: '#8d6e63',
        marginTop: 10,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
});

export default RegistrationScreen;
