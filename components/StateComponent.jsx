// MyComponentWithState.jsx

import React, { useState } from 'react';
import { View, Text, Modal, Button } from 'react-native';

const MyComponentWithState = () => {
    const [showContent, setShowContent] = useState(false);

    const openModal = () => {

        setShowContent(true);
    };

    const closeModal = () => {

        setShowContent(false);
    };

    return (
        <View>
            <Button title="Open Modal" onPress={openModal} />
            {showContent && (
                <Modal>
                    <View>
                        <Text>Modal Content</Text>
                        <Button title="Close Modal" onPress={closeModal} />
                    </View>
                </Modal>
            )}

        </View>
    );
};

export default MyComponentWithState;
