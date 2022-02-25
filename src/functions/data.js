import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from "react-native"

export const read = async (setDatas) => {
    const iv = await AsyncStorage.getItem("@key");
    console.log(iv)
    if(iv) {
        setDatas(JSON.parse(iv));
    } else setDatas([]);
};

export const save = async (datas) => {
    await AsyncStorage.setItem("@key", JSON.stringify(datas));
};

export const del = async () => {
    await AsyncStorage.clear();
    Alert.alert("!!!!")
};