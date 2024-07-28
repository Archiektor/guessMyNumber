import {Pressable, StyleSheet, Text, View} from 'react-native';

const PrimaryButton = ({children, onPress, userBtnStyle, textStyle, disabled}) => {
    const onPressHandler = () => {
        if (onPress && !disabled) {
            onPress();
        }
    }

    return (
        <View style={[styles.btnOuterContainer, userBtnStyle]}>
            <Pressable style={({pressed}) => [
                styles.btnInnerContainer,
                {opacity: pressed || disabled ? 0.7 : 1}
            ]} onPress={onPressHandler} android_ripple={{color: '#1f7323'}}>
                <Text style={styles.btnText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;


const styles = StyleSheet.create({
    btnOuterContainer: {
        margin: 4,
        borderRadius: 28,
        backgroundColor: '#007BFF',
        shadowColor: '#000', // for shadow on iOS
        shadowOffset: {width: 0, height: 2}, // for shadow on iOS
        shadowOpacity: 0.2, // for shadow on iOS
        shadowRadius: 3, // for shadow on iOS
        elevation: 3, // for shadow on Android
        overflow: 'hidden', // Ensures any child overflow is hidden
    },
    btnInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
    }
});
