import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View, Text} from 'react-native';
import {Colors} from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const StartGameScreen = ({pickNumberCb}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const onChangeTextHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }

        pickNumberCb(chosenNumber);
    }

    return (
        <View>
            <Title customTitleStyles={styles.customTitle}>Guess My Number</Title>
            <View style={styles.startGameScreenContainer}>
                <Text style={styles.instructionText}>Enter any number between 1 and 99</Text>
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
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    customTitle: {
        color: Colors.primaryText,
        fontSize: 32,
        padding: 2,
    },
    instructionText: {},
    startGameScreenContainer: {
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryText,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 25,
    },
    numberInput: {
        width: 100,
        maxHeight: 50,
        fontSize: 32,
        fontWeight: '600',
        color: Colors.primary500,
        marginBottom: 16,
        borderBottomColor: Colors.primary500,
        borderBottomWidth: 2,
        backgroundColor: Colors.primaryText,
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
        backgroundColor: Colors.primary500
    },
    customTextStyle: {
        color: Colors.primaryText,
        fontSize: 16
    }
});

