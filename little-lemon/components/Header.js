import React from "react";
import { View, Text, TextInput, Image, StyleSheet, SafeAreaView } from "react-native";


export default function Header(){
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo2.png')} style={styles.logo} ></Image>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        position: 'relative',
        flex: 0.20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#495E57',
        opacity: 0.7,    },
    logo:{
        height: 60,
        resizeMode: 'contain'
    }
})