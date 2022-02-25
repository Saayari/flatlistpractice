import { StyleSheet, View, TouchableOpacity, Text, FlatList, TextInput} from "react-native";
import Item from "./components/item";
import { useState, useEffect } from "react";
import Btn from "./components/btn";
import { save, read, del } from "./functions/data";
import Ionicons from "react-native-vector-icons/Ionicons";

var data = [];

const App = () => {
    const [datas, setDatas] = useState(data);
    const [value, onChangeText] = useState("");
    const addElement = () => {
        var newArray = [...datas , {content: value}];
        setDatas(newArray);
        save(datas)
    }

    useEffect(() => {
        read(setDatas);
    }, []);

    const renderItem = ({ item }) => (
        <Item content={item.content} />
    );
    return (
        <View style={{ padding: 20, marginTop: 50, flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }}>
            <View style={{height: 60, width: "100%", flexDirection: "row"}}>
                <TextInput onChangeText={text => onChangeText(text)} value={value} placeholder="Input Text Here" style={{ padding: 10, borderRadius: 10, backgroundColor: "lightgrey", width: "80%", height: "100%"}}></TextInput>
                <Btn 
                    onPress={addElement} />
            </View>
            <TouchableOpacity style={{height: 60, width: "100%", backgroundColor: "hotpink", borderRadius: 15, marginTop: 20, justifyContent: "center", alignItems: "center"}} onPress={del}>
                <Ionicons name="trash" color="FFF" size={50} style ={{ marginLeft: 2.5, marginBottom: 2}}/>
            </TouchableOpacity>
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default App;