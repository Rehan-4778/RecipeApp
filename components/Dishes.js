import React from 'react'
import {StyleSheet, ScrollView, Text, View } from 'react-native'
import DishCard from './DishCard'

const Dishes = (props) =>{
    return (
      <ScrollView contentContainerStyle={styles.scrollableView}>
        {props.dishes.map((dish, index) => {
          
          return <DishCard key={dish.id} dish={dish} navigation={props.navigation} />
          
        })}
       
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  scrollableView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  }
});


export default Dishes;
