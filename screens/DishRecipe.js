import React from 'react'
import {StyleSheet, Image, Text, View, ScrollView } from 'react-native'
import IngredientCard from '../components/IngredientCard';

const DishRecipe = ({route}) => {

    const {dishId, dishName,dishIngredients,dishTime,dishImage} = route.params;
    
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image source={{uri: dishImage}} style={styles.image}/>
            </View>    

            <View>
                <Text style={styles.heading}>{`Ingredients(${dishIngredients.length})`}</Text>
            </View>
           
            <View style={styles.ingredientCards}>
                {dishIngredients.map((ingredient, index) => {
                    return <IngredientCard key={ingredient.index} name={ingredient.name} quantity={ingredient.quantity} />
                })}
            </View>
                
            <Text>{route.params.dishTime}</Text>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 270,
        padding: 25,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        
    },

    ingredientCards: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        paddingHorizontal: 25,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 25,
        marginTop: 5,
        marginBottom: 25,
    }
    
});


export default DishRecipe;