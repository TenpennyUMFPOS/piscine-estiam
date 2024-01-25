import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CommonButton = ({ title, onPress, buttonColor }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#8d6e63',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 15,
        width: '100%',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});

export default CommonButton;
