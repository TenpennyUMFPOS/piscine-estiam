// MyButton.jsx

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const MyButton = (props) => {
    const { label, color, onPress } = props;

    return (
        <TouchableOpacity style={{ backgroundColor: color }} onPress={onPress}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

export default MyButton;
