import {useState, useEffect} from 'react';
import {Alert, Text, View, StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import {Colors} from '../constants/colors';
import {Ionicons} from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (rndNum === exclude) {
        if (min === max) {
            return min; // If min and max are the same, return min to avoid infinite loop
        }
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, gameOverCb}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [numberOfTries, setNumberOfTries] = useState(1);
    const [gameOver, setGameOver] = useState(false);
    const [data, setData] = useState([currentGuess]);

    const {width, height} = useWindowDimensions();

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    useEffect(() => {
        if (currentGuess === userNumber) {
            setGameOver(true);
            Alert.alert("Game Over!", `It took the opponent ${numberOfTries} attempts`, [
                {text: "Okay", style: "default", onPress: gameOverCb}
            ]);
        }
    }, [currentGuess, userNumber, numberOfTries, gameOverCb]);

    const nextGuessHandler = (direction) => {
        if (gameOver) return;

        if ((direction === 'lower' && currentGuess <= userNumber) || (direction === 'greater' && currentGuess >= userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text: "Sorry!", style: "cancel"}]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else if (direction === 'greater') {
            minBoundary = currentGuess + 1;
        }

        if (minBoundary >= maxBoundary) {
            Alert.alert("Error", "Invalid boundaries set. The game cannot proceed.", [{text: "Okay", style: "default", onPress: gameOverCb}]);
            return;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setData(prevData => [newRndNumber, ...prevData])
        setNumberOfTries(prevTries => prevTries + 1);
    }

    //console.log(`Current boundaries are : [${minBoundary}/ ${maxBoundary}]`);

    const isSmallDevice = height < 390;

    return (
        <View style={[styles.screen, {marginTop: isSmallDevice ? 15 : 140}]}>
            <Title customTitleStyles={styles.customTitle}>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={[styles.text, {fontSize: isSmallDevice ? 14 : 22, marginBottom: isSmallDevice ? 5 : 10}]}>Higher or lower?</Text>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')} customBtnStyle={styles.customBtnStyleSecond}>
                        <Ionicons name={'remove'} size={22} color={'white'}/>
                    </PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')} customBtnStyle={styles.customBtnStyleSecond}>
                        <Ionicons name={'add'} size={22} color={'white'}/>
                    </PrimaryButton>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        renderItem={(itemData) => (
                            <View style={styles.singleItem}>
                                <Text>{data.length - itemData.index} try was with number {itemData.item}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    customTitle: {
        color: Colors.primaryText, borderColor: Colors.primaryText, borderWidth: 2, borderStyle: 'solid'
    },
    text: {
        textAlign: 'center',
    },
    btnContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12,
    },
    customBtnStyle: {
        backgroundColor: Colors.primary500
    },
    customBtnStyleSecond: {
        backgroundColor: Colors.primary500, flex: 1,
    },
    customTextStyle: {
        color: Colors.primaryText,
    },
    singleItem: {
        marginTop: 6,
        marginBottom: 4,
        backgroundColor: Colors.primaryText,
        borderWidth: 1,
        borderColor: Colors.primary500,
        fontSize: 22,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});
