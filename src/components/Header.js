import { StyleSheet, Text, View } from 'react-native'
import Colors from '../globals/Colors'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.fourth,
        marginTop: 40,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: Colors.lightGray,
        fontSize: 20,
        fontFamily: "josefin"
    }
})