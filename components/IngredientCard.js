import React from 'react'
import {StyleSheet, Text, View } from 'react-native'

const IngredientCard = (props) => {

    const {name,quantity} = props;
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'rgb(245,245,240)',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: "rgb(247, 124, 67)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.46,
        elevation: 5,
        borderWidth: 1,
        borderColor: 'rgb(247, 124, 67)',
        overflow: 'hidden',

    },
    name: {
        color: '#555',
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 14,
        color: '#888',
    }
        
});

export default IngredientCard;
