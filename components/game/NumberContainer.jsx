import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constants/colors';

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary500,
        padding: deviceHeight < 390 ? 12 : 24,
        margin: deviceHeight < 390 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.secondary500,
        fontSize: deviceHeight < 390 ? 24 : 36,
        fontWeight: '600',
    }
})
