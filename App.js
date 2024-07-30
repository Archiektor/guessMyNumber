import {useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState();

    const goBackHandler = () => {
        setUserNumber(undefined);
    }

    const pickedNumber = (pickedNumber) => {
        setUserNumber(pickedNumber);
    }

    return (
        <LinearGradient colors={['#4A90E2', '#50E3C2']} style={styles.rootScreen}>
            <ImageBackground source={require('./assets/images/background.png')} imageStyle={styles.bgImage} style={styles.rootScreen}>
                {!userNumber ? <StartGameScreen onNumberChanged={pickedNumber}/> : <GameScreen goBackHandler={goBackHandler} />}
            </ImageBackground>
        </LinearGradient>
    )
        ;
}


const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        opacity: 0.15
    }
});
