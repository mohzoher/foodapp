import React from "react";
import { View, Text, TextInput, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import Header from "../components/Header";





export default function Onboarding(){
    return (
        <View style={styles.container} >
            <Header/>
            <View style={styles.hero}>
                <Text style={styles.herotext}>Let us get to know you</Text>
                <View>
                    <TextInput style={styles.inputBox} placeholder={'First Name'} keyboardType="default"/>
                    <TextInput style={styles.inputBox} placeholder={'email'} keyboardType="email-address"/>
                    <Pressable style={styles.buttoncontainer}>
                        <Text style={styles.button}>Next</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
  container:{
    flex: 0.9,
    paddingTop: 30,
    backgroundColor: '#EDEFEE',
    justifyContent: 'space-between'
  },
  inputBox: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    letterSpacing: 3,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    borderRadius: 10,
    backgroundColor: '#EDEFEE',
  },
  hero:{
    flex: 1,
    padding: 20,
    paddingTop: 100,
    paddingBottom: 50,
    alignContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#495E57',
    opacity: 0.7,
    justifyContent: 'space-between'
  },
  herotext:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
    color: 'white'
  },
  button: {
    height: 40,
    width: 180,
    fontSize: 22,
    backgroundColor: '#F4CE14',
    borderRadius: 10,
    textAlign: 'center',
    padding: 4,
  },
  buttoncontainer:{
    padding: 20,
    justifyContent:'flex-end',
    flexDirection: 'row'
  }
});
