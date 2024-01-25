import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CommonButton from './CommonButton';
import LogoImage from '../assets/coffee-logo.png';

const HomeScreen = ({ navigation }) => {
    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    const handleRegistrationPress = () => {
        navigation.navigate('Registration');
    };

    return (
        <View style={styles.container}>
            <Image source={LogoImage} style={styles.logo} resizeMode="contain" />
            <CommonButton title="Login" onPress={handleLoginPress} buttonColor="#8d6e63" />
            <CommonButton title="Register" onPress={handleRegistrationPress} buttonColor="#8d6e63" />
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
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
});

export default HomeScreen;
