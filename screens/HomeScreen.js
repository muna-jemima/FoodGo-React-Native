import { StyleSheet, Text, View , Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'




const foodData = [
  {
    id: '1',
    name: 'Burger',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
  },

  {
    id: '2',
    name: 'Pizza',
    price: '$15',
    image: 'https://images.unsplash.com/photo-1682264788192-9abdec90c425?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBpenphfGVufDB8fDB8fHww',
  },


  {
    id: '3',
    name: 'Jollof Rice',
    price: '$12',
    image:  'https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZyaWVkJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D',
  },

  {
    id: '4',
    name: 'Chicken',
    price: '$20',
    image: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    id: '5',
    name: 'Meat',
    price: '$19',
    image:'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
  },
]



export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Delicious Food</Text>

     <FlatList

     data ={foodData}
     keyExtractor={(item) => item.id}
     renderItem={({item}) => (

      <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('FoodDetails',{ food: item }) } >

        <Image source={{uri: item.image}} style={styles.image}/>

        <View style={styles.info}>

          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>

        </View>
     

      </TouchableOpacity>
      
     )}
     
     />

     <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <Text style={{textAlign: 'center', marginBottom: 30, color: '#fff', fontSize: 18, paddingHorizontal: 20, paddingVertical: 6, borderRadius: 20,backgroundColor: '#f30707'}}> GO To Cart</Text>
     </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 30,
  },

  title:{
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
    marginBottom: 20,
    color: '#f30707'
  },

  card:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#f30707',
    overflow:'hidden',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    
  },

  image:{
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  info:{
    padding: 10,
    justifyContent: 'center',
  },

  name:{
    fontSize: 18,
    fontWeight:'bold',
    color: '#f30707',
  },

  price:{
    color: '#ff6600',
    marginTop: 5,
  },
});