import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ForgotpasswordScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Forgot password</Text>

      <Text style={styles.subtitle}> Enter Your Email to reset your password</Text>

       {/* Email Input */}

       <TextInput
       placeholder='Enter your email'
       placeholderTextColor='#460404'
       style={styles.input}
       />

       {/* Reset Button */}

       <TouchableOpacity style={styles.button} >

        <Text style={styles.buttonText}>Send</Text>
       </TouchableOpacity>

         {/* Back To Login */}

         <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}> Back To Login</Text>

         </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },

  title:{
    fontSize: 26,
    color: '#f30707',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle:{
    fontSize: 12,
    color: '#f30707',
    textAlign: 'center',
    marginBottom: 60,
  },

  input:{
    borderWidth: 1,
    borderColor: '#f30707',
    borderRadius: 10,
    padding: 15,
    marginBottom: 17,
  },

  button:{
    backgroundColor: '#f30707',
    padding: 15,
    borderRadius: 10,
  },

  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  link:{
    textAlign: 'center',
    marginTop: 20,
    color: '#f30707',
  },
});