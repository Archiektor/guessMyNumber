import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
    const [input, setInput] = useState('');

    const onChangeTextHandler = (enteredText) => {
        setInput(enteredText);
    }

    return (
        <View style={styles.startGameScreenContainer}>
            <TextInput
                style={styles.numberInput}
                value={input}
                onChangeText={onChangeTextHandler}
                placeholder="Guess a number..."
                placeholderTextColor="#888"
            />
            <View style={styles.btnContainer}>
                <PrimaryButton
                    onPress={() => console.log('Reset pressed')}
                    userStyle={{flex: 1, backgroundColor: '#4CAF50'}}
                    textStyle={{color: '#fff', fontSize: 16}}
                >
                    Reset
                </PrimaryButton>
                <PrimaryButton
                    onPress={() => console.log('Confirm pressed')}
                    userStyle={{flex: 1, backgroundColor: '#4CAF50'}}
                    textStyle={{color: '#fff', fontSize: 16}}
                >
                    Confirm
                </PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    startGameScreenContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    numberInput: {
        width: 100,
        maxHeight: 50,
        fontSize: 32,
        fontWeight: '600',
        color: '#efd525',
        borderBottomColor: '#efd525',
        borderBottomWidth: 2,
        paddingLeft: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    btnContainer: {
        minWidth: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default StartGameScreen;