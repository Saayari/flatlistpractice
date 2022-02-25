import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Btn = ( {onPress} ) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text>+</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        backgroundColor: "red",
        padding: 20,
        borderRadius: 10,
    }
})

export default Btn;