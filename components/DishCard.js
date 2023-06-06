import React from 'react'
import {StyleSheet, ImageBackground, Text, View, Alert } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'

const DishCard = (props) =>{
    return (
      <View style={styles.card}
        onTouchEnd={() => props.navigation.navigate('DishRecipe', {dishId:props.dish.id,dishName:props.dish.name, dishIngredients:props.dish.ingredients, dishTime:props.dish.time, dishImage:props.dish.image})}
      >
        <ImageBackground 
            source={{uri: props.dish.image}} 
            style={styles.image} 
            imageStyle={{borderRadius: 15,resizeMode: "cover",paddingHorizontal: 20,}}
        >
            <View style={styles.favorite}>
            <FontAwesomeIcon icon={faBookmark} style={styles.favoriteIcon} size={20}/>
            </View>

            <View style={styles.dishDetails}>
                <Text style={styles.dishName}>{props.dish.name}</Text>
                <View>
                    <Text style={styles.dishDesc}>{`${props.dish.ingredients.length} Ingredients | ${props.dish.time}`}</Text>
                </View>

            </View>

        </ImageBackground>
      </View>
    )
  
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    card: {
        height: 350,
        width: '80%',
        backgroundColor: 'linear-gradient(140deg, rgba(236,236,236,1) 0%, rgba(221,221,221,1) 40%, rgba(91,91,91,1) 76%, rgba(0,0,0,1) 100%)',
        marginVertical: 25,
        borderRadius: 28,
        overflow: 'hidden',
    },
    favorite: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 10,
    },
    favoriteIcon: {
        color: 'white',
        backgroundColor: 'orange',
    },
    dishDetails: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dishName: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    },
    dishDesc: {
        color: 'white',
        fontSize: 16,
    }
});    

export default DishCard;
