import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const PrimaryButton = ({children, onPress, userStyle, textStyle, disabled}) => {
    const [isHovered, setIsHovered] = useState(false);

    const onPressHandler = () => {
        if (onPress && !disabled) {
            onPress();
        }
        console.log('Button pressed!');
    };

    const handlePressIn = () => {
        setIsHovered(true);
    };

    const handlePressOut = () => {
        setIsHovered(false);
    };

    return (
        <TouchableOpacity
            onPress={onPressHandler}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[
                styles.btnContainer,
                userStyle,
                {backgroundColor: isHovered ? '#1d6a20' : '#4CAF50'} // Background color change on hover
            ]}
            activeOpacity={0.7}
            disabled={disabled}
        >
            <Text style={[styles.btnText, textStyle]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 3, // for shadow on Android
        shadowColor: '#000', // for shadow on iOS
        shadowOffset: {width: 0, height: 2}, // for shadow on iOS
        shadowOpacity: 0.2, // for shadow on iOS
        shadowRadius: 3, // for shadow on iOS
        overflow: 'hidden', // Ensures any child overflow is hidden
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff', // Default text color
    }
});

export default PrimaryButton;