import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import DishRecipe from './screens/DishRecipe';
import Home from './screens/Home';
import SplashScreen from './screens/SplashScreen';

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (

   
    <>
      <StatusBar style="light"/>
      <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'rgb(247, 124, 67)' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#eee' },
          headerTitleAlign: 'center',
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 20,
          }
        }}
      
      >
        <Stack.Screen 
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false,}} />
        <Stack.Screen
          name="Home"
          component={Home} 
          options={{headerShown: false,}}
        />
        <Stack.Screen
          name="DishRecipe"
          component={DishRecipe}
          options={({route}) => ({
            title: route.params.dishName,
          })}
        />

        </Stack.Navigator>
      </NavigationContainer>
       
        

      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
