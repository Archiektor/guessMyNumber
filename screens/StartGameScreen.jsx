import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = ({onNumberChanged}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const onChangeTextHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if ((chosenNumber > 0 && chosenNumber < 99) || isNaN(chosenNumber)) {
            // go to next screen
            console.log('Valid number');
            onNumberChanged(chosenNumber);
        } else {
            // log error                                                                                                  style works only on ios
            Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [{text: 'OK', style: 'destructive', onPress: resetInputHandler}]);
        }
    }

    return (
        <View style={styles.startGameScreenContainer}>
            <TextInput
                style={styles.numberInput}
                value={enteredNumber}
                onChangeText={onChangeTextHandler}
                placeholder={'...'}
            />
            <View style={styles.btnContainer}>
                <PrimaryButton
                    onPress={resetInputHandler}
                    customBtnStyle={styles.customBtnStyle}
                    customTextStyle={styles.customTextStyle}
                >
                    Reset
                </PrimaryButton>
                <PrimaryButton
                    onPress={confirmInputHandler}
                    customBtnStyle={styles.customBtnStyle}
                    customTextStyle={styles.customTextStyle}
                >
                    Confirm
                </PrimaryButton>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    startGameScreenContainer: {
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 25,
    },
    numberInput: {
        width: 100,
        maxHeight: 50,
        fontSize: 32,
        fontWeight: '600',
        color: '#4A90E2',
        marginBottom: 16,
        borderBottomColor: '#4A90E2',
        borderBottomWidth: 2,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    btnContainer: {
        minWidth: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderColor: '#f10d0d',
        // borderWidth: 1,
        borderStyle: 'solid',
        gap: 15
    },
    customBtnStyle: {
        flex: 1,
        backgroundColor: '#4A90E2'
    },
    customTextStyle: {
        color: '#fff',
        fontSize: 16
    }
});

