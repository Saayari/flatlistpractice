import { View, Text, StyleSheet, Dimensions } from "react-native";

const Item = ({ content }) => {
    return (
        <View style={styles.container}>
            <Text>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e5e5e5",
        marginTop: Dimensions.get("window").height / 50,
        padding: 25,
        borderRadius: 15,
        width: "100%",
    }
})
export default Item;