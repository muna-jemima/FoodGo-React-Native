import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}> Create Account</Text>

      {/* NAME */}

      <TextInput
      placeholder='Enter Your Name'
      placeholderTextColor='#460404'
      style={styles.input}
      />


          {/* Email */}

      <TextInput
      placeholder='Enter Your Email'
      placeholderTextColor= '#460404'
      style={styles.input}
      />

              {/* PassWord */}

      <TextInput
      placeholder='Enter Your Password'
      placeholderTextColor='#460404'
      secureTextEntry
      style={styles.input}
      />

        {/* Confrim password */}

      <TextInput
      placeholder='Confrim password'
      placeholderTextColor= '#460404'
      secureTextEntry
      style={styles.input}
      />


        {/* RegisterButton */}

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate ('Home')}
        >
          <Text style={styles.buttonText}> Register</Text>
        </TouchableOpacity>

          {/* Back to Login */}

          <TouchableOpacity
          onPress={() => navigation.navigate ('Login')}
          >
            <Text style={styles.link}>Already have an account? Login</Text>

          </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },

  title:{
    fontSize: 26,
    color: '#f30707',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  input:{
    borderWidth: 1,
    borderRadius: 10,
     borderColor: '#f30707',
    padding: 17,
    borderRadius: 10,
    marginBottom: 18,
    
   
  },

  button: {
    backgroundColor: '#f30707',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  link:{
    textAlign: 'center',
    marginTop: 15,
    color: '#f30707',
  },

})