import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

       <TextInput 
       placeholder='Enter Your Email'
       placeholderTextColor='#460404'
       style={styles.input}
       />

       <TextInput
       placeholder='Enter Your Password'
       placeholderTextColor='#460404'
       style={styles.input}
       />

       {/* Login */}

       <TouchableOpacity 
       style={styles.button}
       onPress={() => navigation.navigate('Home')}
       >
        <Text style={styles.buttonText}>Login</Text>
       </TouchableOpacity>


       {/* Forgotpassword */}

       <TouchableOpacity
       onPress={() => navigation.navigate('Forgotpassword')}
       >
        <Text style={styles.link}> Forgot Password?</Text>
       </TouchableOpacity>

       {/* Register */}

       <TouchableOpacity
       onPress={() => navigation.navigate ('Register')}
       >
        <Text style={styles.buttonlink}>Don't have an account? Register</Text>

       </TouchableOpacity>


     
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        padding: 20,
    },

    title:{
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#f30707', 
    },

    input:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f30707',
        padding: 15,
        marginBottom: 15,
        color:'#460404',

    },

    button:{
        backgroundColor: '#f30707',
        padding: 15,
        borderRadius:10,
        marginTop: 10,
    },

    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    link:{
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 10,
        color: '#f30707',
    },

    buttonlink:{
        textAlign: 'center',
        marginBottom: 15,
        color: '#f30707'
    },

})