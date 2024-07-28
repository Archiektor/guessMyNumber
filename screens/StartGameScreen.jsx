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
                placeholder="Num..."
                placeholderTextColor="#888"
            />
            <View style={styles.btnContainer}>
                <PrimaryButton
                    onPress={() => console.log('Reset pressed')}
                    userBtnStyle={{flex: 1, backgroundColor: '#4A90E2',}}
                    textStyle={{color: '#fff', fontSize: 18}}
                >
                    Reset
                </PrimaryButton>
                <PrimaryButton
                    onPress={() => console.log('Confirm pressed')}
                    userBtnStyle={{flex: 1, backgroundColor: '#4A90E2',}}
                    textStyle={{color: '#fff', fontSize: 18}}
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
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        borderBottomColor: '#4A90E2',
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
        // borderColor: '#f10d0d',
        // borderWidth: 1,
        borderStyle: 'solid',
        gap: 15
    }
});

