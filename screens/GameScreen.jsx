import {StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const GameScreen = ({goBackHandler}) => {
    return (
        <View>
            <Text>GameScreen</Text>
            <PrimaryButton onPress={goBackHandler} customBtnStyle={styles.customBtnStyle} customTextStyle={styles.customTextStyle}>Back</PrimaryButton>
        </View>
    );
}

export default GameScreen

const styles = StyleSheet.create({
    customBtnStyle: {
        backgroundColor: '#4A90E2'
    },
    customTextStyle: {
        color: '#fff',
        fontSize: 16
    }
});