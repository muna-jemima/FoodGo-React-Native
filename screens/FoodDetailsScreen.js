import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function FoodDetailsScreen({route,cart, setCart}) {



  

  const { food } = route.params;

  const addToCart = () =>{
    setCart([...cart,food]);
  };
  return (
    <View style={styles.container}>

      <Image source={ {uri: food.image}} style={styles.image}/>

      <Text style={styles.name}>{food.name}</Text>
      <Text style={styles.price}>{food.price}</Text>

      <Text style={styles.description}> This is a very delicious meal. You will absolutely love it! </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Order Now</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={addToCart}>
  <Text style={styles.buttonText}>Add to Cart 🛒</Text>
</TouchableOpacity>
 
      
     
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  image:{
    width: '100%',
    height: 250,
    borderRadius: 20,
    marginTop: 80,
  },

  name:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  price:{
    fontSize: 18,
    color: '#ff6600',
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 20,
  },

  description:{
    marginTop: 15,
    fontSize: 16,
    color: '#f30707',
    
  },

  button:{
    backgroundColor: '#f30707',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },

  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})