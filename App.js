import {useState, useEffect} from 'react';
import {ActivityIndicator, ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import {Colors} from './constants/colors.js';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);

    const [fontsLoaded] = useFonts({
        'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    useEffect(() => {
        const prepare = async () => {
            await SplashScreen.preventAutoHideAsync();
        };
        prepare();
    }, []);

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={Colors.primary500}/>
            </View>
        );
    }


    const pickNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    const gameOverHandler = () => {
        setGameIsOver(true);
    }

    const startNewGameHandler = () => {
        setUserNumber(null);
    }

    let screen = <StartGameScreen pickNumberCb={pickNumberHandler}/>

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} gameOverCb={gameOverHandler}/>
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen startNewGameCb={startNewGameHandler} guessedNumber={userNumber}/>
    }

    return (
        <LinearGradient colors={[Colors.primary500, Colors.secondary500]} style={styles.rootScreen}>
            <ImageBackground source={require('./assets/images/background.png')} imageStyle={styles.bgImage} style={styles.rootScreen}>
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
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
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
