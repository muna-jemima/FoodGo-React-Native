import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function OnboardingScreen({navigation}) {
  return (
   <View style={styles.container}>
    <Text style={styles.title}> Welcome To FoodGo</Text>
    <Text style={styles.subtitle}>Order Your Favorite Meals Easily</Text>

    <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Login')}
>
  <Text style={styles.buttonText}>Get Started</Text>
</TouchableOpacity>
    
  

   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontSize: 40,
        marginBottom: 5,
        fontWeight:'bold',
        color: '#f30707'
    },

    subtitle:{
        fontSize: 12,
        color: '#f30707',

    },

    button: {
    backgroundColor: '#f30707',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 30,
    },
    
    buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

    


})