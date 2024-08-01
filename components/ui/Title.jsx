import {StyleSheet, Text, View} from 'react-native';

const Title = ({children, customTitleStyles}) => {
    return (
        <View>
            <Text style={[styles.title, customTitleStyles]}>{children}</Text>
        </View>
    );
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
    }
});
