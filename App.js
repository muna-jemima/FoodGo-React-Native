
import React, { useState } from 'react';

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"



import  OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';
import HomeScreen from './screens/HomeScreen';
import FoodDetailsScreen from './screens/FoodDetailsScreen'
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

export default function App() {

const[cart, setCart] = useState ([]);



  return (
   
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Onboarding" 
         screenOptions={{headerShown: false}}>

        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>

        <Stack.Screen name="Login" component={LoginScreen}/>

        <Stack.Screen name="Register" component={RegisterScreen}/>

        <Stack.Screen name="Forgotpassword" component={ForgotpasswordScreen}/>


            {/* PASS CART TO HOME */}


        <Stack.Screen name="Home">
  {(props) => (
    <HomeScreen {...props} cart={cart} setCart={setCart} />
  )}
</Stack.Screen>

<Stack.Screen name="FoodDetails">
  {(props) => (
    <FoodDetailsScreen {...props} cart={cart} setCart={setCart} />
  )}
</Stack.Screen>

<Stack.Screen name="Cart">
  {(props) => (
    <CartScreen {...props} cart={cart} setCart={setCart} />
  )}
</Stack.Screen>
             

      </Stack.Navigator>
    </NavigationContainer>
  );
}
