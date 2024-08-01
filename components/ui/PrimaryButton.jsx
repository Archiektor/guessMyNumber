import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';

const PrimaryButton = ({children, onPress, customBtnStyle, customTextStyle, disabled}) => {
    const onPressHandler = () => {
        if (onPress && !disabled) {
            onPress();
        }
    }

    return (
        <View style={[styles.btnOuterContainer, customBtnStyle]}>
            <Pressable style={({pressed}) => [
                styles.btnInnerContainer,
                {opacity: pressed || disabled ? 0.7 : 1}
            ]} onPress={onPressHandler} android_ripple={{color: Colors.primary700}}>
                <Text style={[styles.btnText, customTextStyle]}>
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
        backgroundColor: Colors.secondary500,
        shadowColor: Colors.shadows, // for shadow on iOS
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
        fontFamily: 'open-sans-regular',
        color: Colors.primaryText,
        textAlign: 'center',
    },
});
