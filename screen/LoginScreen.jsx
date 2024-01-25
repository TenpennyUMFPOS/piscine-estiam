import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import CommonButton from './CommonButton';

const LoginScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleLoginPress = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('Dashboard');
        }, 2000);
    };

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" color="#8d6e63" style={styles.loadingIndicator} />}
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <CommonButton title="Login" onPress={handleLoginPress} buttonColor="#8d6e63" />
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
});

export default LoginScreen;
