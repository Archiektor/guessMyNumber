import {Text, Image, StyleSheet, View} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import {Colors} from '../constants/colors';
import Title from '../components/ui/Title';

const GameOverScreen = ({startNewGameCb, guessedNumber}) => {
    return (<View style={styles.screen}>
        <Title customTitleStyles={styles.gameOverText}>Game Over</Title>
        <View style={styles.imgContainer}>
            <Image source={require('../assets/images/success.png')} style={styles.image}/>
        </View>
        <View>
            <Text style={styles.text}>Your phone guessed the number <Text
                style={styles.selected}>{guessedNumber}</Text>.</Text>
        </View>
        <PrimaryButton onPress={startNewGameCb} customBtnStyle={styles.customBtnStyle} customTextStyle={styles.customTextStyle}>Start new game</PrimaryButton>
    </View>);
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1, padding: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customBtnStyle: {
        backgroundColor: Colors.primary500
    },
    customTextStyle: {
        color: Colors.primaryText,
        fontSize: 20
    },
    gameOverText: {
        color: Colors.primaryText,
        fontSize: 36,
        marginBottom: 24,
    },
    imgContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primaryText,
        overflow: 'hidden',
        marginBottom: 40,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    selected: {
        fontFamily: 'open-sans-bold',
        color: 'red',
        shadowColor: Colors.shadows, // for shadow on iOS
        shadowOffset: {width: 0, height: 2}, // for shadow on iOS
        shadowOpacity: 0.2, // for shadow on iOS
        shadowRadius: 3, // for shadow on iOS
        elevation: 3, // for shadow on Android
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 24,
    }
})