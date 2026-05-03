

import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';



export default function CartScreen({ cart, setCart }) {

  // ✅ NOW cart exists here
  const removeItem = (indexToRemove) => {
    const newCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(newCart);
  };

  // ✅ total calculation
  const total = cart.reduce((sum, item) => {
    return sum + parseInt(item.price.replace('$', ''));
  }, 0);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (

          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>

            {/* ✅ REMOVE BUTTON */}
            <TouchableOpacity onPress={() => removeItem(index)}>
              <Text style={{ color: 'red', marginTop: 5 }}>
                Remove 
              </Text>
            </TouchableOpacity>

          </View>

        )}
      />

      {/* ✅ TOTAL */}
      <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 100, color: '#f30707', textAlign: 'center',  }}>
        Total: ${total}
      </Text>

    </View>
  );
}


// const total = cart.reduce((sum, item)=>{
//   return sum + parseInt(item.price.replace('$',''));
// }, 0);

// export default function CartScreen({ cart, setCart }) {
//   return (
//     <View style={styles.container}>
//        <Text style={styles.title}>My Cart</Text>


//        <FlatList
//        data={cart}
//        keyExtractor={(item,index) => index.toString()}
//        renderItem={({item}) =>(

//         <View style={styles.card}>
//           <Text style={styles.name}>{item.name}</Text>
//           <Text style={styles.price}>{item.price}</Text>

//         </View>

//        )}
//        />

//          <Text style={{ fontSize: 18, marginTop: 20 }}>
//            Total: ${total}
// </Text>
      
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 30,
  },

  title:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#f30707',
    marginTop: 60,
  },

  card:{
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f30707',
    marginBottom: 10,
    borderRadius: 10,
  },

  name:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'#f30707'
  },

  price:{
    color:'#ff6600',
    marginTop: 5,
  }

});