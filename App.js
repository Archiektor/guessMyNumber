import {StyleSheet, View, Text} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
    return (
        <LinearGradient colors={['#4A90E2', '#50E3C2']} style={styles.rootScreen}>
            <StartGameScreen/>
            {/*<Text>Hello</Text>*/}
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
