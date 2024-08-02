import React, {useEffect, useState} from 'react';
import {Text, Image, StyleSheet, View, Dimensions} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import {Colors} from '../constants/colors';
import Title from '../components/ui/Title';

const GameOverScreen = ({startNewGameCb, guessedNumber}) => {
    const [isSmallDevice, setIsSmallDevice] = useState(Dimensions.get('window').height < 390);

    useEffect(() => {
        const updateLayout = () => {
            setIsSmallDevice(Dimensions.get('window').height < 390);
        };

        const subscription = Dimensions.addEventListener('change', updateLayout);

        return () => {
            subscription?.remove();
        };
    }, []);

    return (
        <View style={styles.screen}>
            <Title customTitleStyles={{...styles.gameOverText, fontSize: isSmallDevice ? 24 : 36}}>Game Over</Title>
            <View style={{
                ...styles.imgContainer, width: isSmallDevice ? 140 : 280, height: isSmallDevice ? 140 : 280, borderRadius: isSmallDevice ? 70 : 140,
                marginBottom: isSmallDevice ? 20 : 40
            }}>
                <Image source={require('../assets/images/success.png')} style={styles.image}/>
            </View>
            <View>
                <Text style={{...styles.text, marginBottom: isSmallDevice ? 12 : 24}}>Your phone guessed the number <Text style={styles.selected}>{guessedNumber}</Text>.</Text>
            </View>
            <PrimaryButton onPress={startNewGameCb} customBtnStyle={styles.customBtnStyle} customTextStyle={styles.customTextStyle}>
                Start new game
            </PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customBtnStyle: {
        backgroundColor: Colors.primary500,
    },
    customTextStyle: {
        color: Colors.primaryText,
        fontSize: 20,
    },
    gameOverText: {
        color: Colors.primaryText,
        marginBottom: 24,
    },
    imgContainer: {
        borderWidth: 3,
        borderColor: Colors.primaryText,
        overflow: 'hidden',
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
    }
});
