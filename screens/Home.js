import React, {useState } from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
import Dishes from '../components/Dishes'
import SearchHeader from '../components/SearchHeader'

const Home = ({navigation}) => {

    const [dishes, setDishes] = useState([
      {
        id: 1,
        name: 'Chicken',
        image: 'https://img.freepik.com/free-photo/massaman-curry-frying-pan-with-spices-cement-floor_1150-20777.jpg?w=996&t=st=1670384326~exp=1670384926~hmac=5f17cd4c7baa1c5c41219a8cbe4302d9bc8bed846ee01ed90311aeabe13a7a57',
        description: 'Chicken is the most common type of poultry in the world. Owing to the relative ease and low cost of raising them in comparison to animals such as cattle or hogs, chickens have become prevalent throughout the cuisine of cultures around the world, and their meat has been variously adapted to regional tastes.',
        ingredients:
        [
          {index:1 ,name: 'Chicken', quantity: '1 kg'},
          {index:2 ,name: 'Salt', quantity: '1 tsp'},
          {index:3 ,name: 'Pepper', quantity: '1 tsp'},
          {index:4 ,name: 'Onion', quantity: '1'},
          {index:5 ,name: 'Garlic', quantity: '1 tsp'},
          {index:6 ,name: 'Tomato', quantity: '1'},
          {index:7 ,name: 'Ginger', quantity: '1 tsp'},
          {index:8 ,name: 'Green Chilli', quantity: '1'},
          {index:9 ,name: 'Coriander Leaves', quantity: '1 tsp'},
          {index:10 ,name: 'Lemon Juice', quantity: '1 tsp'},
          {index:11 ,name: 'Oil', quantity: '1 tsp'},
        ],
        time: '30 mins',
      },
      {
        id: 2,
        name: 'Beef',
        image: 'https://www.shutterstock.com/image-photo/grilled-meat-shashlik-spice-red-600w-1050314711.jpg',
        ingredients:[
          {index:1, name: 'Beef', quantity: '1 kg'},
          {index:2, name: 'Salt', quantity: '1 tsp'},
          {index:3, name: 'Pepper', quantity: '1 tsp'},
          {index:4, name: 'Onion', quantity: '1'},
          {index:5, name: 'Garlic', quantity: '1 tsp'},
          {index:6, name: 'Tomato', quantity: '1'},
          {index:7, name: 'Ginger', quantity: '1 tsp'},
          {index:8, name: 'Green Chilli', quantity: '1'},
          {index:9, name: 'Coriander Leaves', quantity: '1 tsp'},
          {index:10, name: 'Lemon Juice', quantity: '1 tsp'},
          {index:11, name: 'Oil', quantity: '1 tsp'},          
        ]
      },
      {
        id: 3,
        name: 'French Fries',
        image: 'https://www.shutterstock.com/image-photo/french-fries-600w-1050314711.jpg',
        ingredients:[
          {index:1, name: 'Potato', quantity: '1 kg'},
          {index:2, name: 'Salt', quantity: '1 tsp'},
          {index:3, name: 'Pepper', quantity: '1 tsp'},
          {index:4, name: 'Garlic', quantity: '1 tsp'},
          {index:5, name: 'Green Chilli', quantity: '1'},
          {index:6, name: 'Coriander Leaves', quantity: '1 tsp'},
        ]  
      },
      {
        id: 4,
        name: 'Cheese Burger',
        image: 'https://www.shutterstock.com/image-photo/cheeseburger-600w-1050314711.jpg',
        ingredients:[
          {index:1, name: 'Bread', quantity: '1'},
          {index:2, name: 'Cheese', quantity: '1'},
          {index:3, name: 'Tomato', quantity: '1'},
          {index:4, name: 'Lettuce', quantity: '1'},
          {index:5, name: 'Onion', quantity: '1'},
          {index:6, name: 'Mayonnaise', quantity: '1 tsp'},
          {index:7, name: 'Ketchup', quantity: '1 tsp'},
          {index:8, name: 'Mustard', quantity: '1 tsp'},
          {index:9, name: 'Salt', quantity: '1 tsp'},
          {index:10, name: 'Pepper', quantity: '1 tsp'},
        ]
      }
  ]);
    return (

      <View style={styles.container}>
        
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Find Best Recipe{'\n'}For Cooking</Text>
          <SearchHeader/>
        </View>

        <View style={styles.dishesContainer} >
          <Dishes dishes={dishes} navigation={navigation}/>
          
        </View>
      </View>  

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 'auto',
    },

    headerContainer: {
      height:'auto',
      paddingVertical: 25,
      backgroundColor:'rgb(247, 124, 67)',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      borderColor: 'red',
    },

    dishesContainer:{
      height: 500,
      marginTop: 15,
    },

    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 30,
        lineHeight: 32,
    }
})


export default Home;

