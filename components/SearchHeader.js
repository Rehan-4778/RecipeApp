import React, { Component } from 'react'
import {StyleSheet, Text, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'

const SearchHeader = () => {
    return (
        <View>

            <View style={styles.container}>
                <TextInput
                    style={styles.searchBox}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    placeholder="Search Recipe"
                    placeholderTextColor="#bbb"
                    >
                </TextInput>
            </View>

            <ScrollView 
                contentContainerStyle={styles.contentContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Pressable
                    style={styles.tag}
                    className="tag"
                    onPress={() => Alert.alert('Simple Button pressed')}
                >
                    <Text>All</Text>
                </Pressable>

                <Pressable
                    style={styles.tag}
                    onPress={() => Alert.alert('Simple Button pressed')}
                >
                    <Text>Burger</Text>
                </Pressable>

                <Pressable
                    style={styles.tag}
                    onPress={() => Alert.alert('Simple Button pressed')}
                >
                    <Text>Fries</Text>
                </Pressable>

                <Pressable
                    style={styles.tag}
                    onPress={() => Alert.alert('Simple Button pressed')}
                >
                    <Text>Drinks</Text>
                </Pressable>

                <Pressable
                    style={styles.tag}
                    onPress={() => Alert.alert('Simple Button pressed')}
                >
                    <Text>Drinks</Text>
                </Pressable>

            </ScrollView>

        </View>

        

    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        // height: 'auto',
        marginHorizontal: 30,
        marginTop: 20,
    },
    searchBox: {
        height: 'auto',
        width: '100%',
        color: 'black',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: .25,
        shadowRadius: 5,
        elevation: 2,
    },
    contentContainer: {
        marginHorizontal: 30,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
    },
    tag: {
        color: '#777',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 16,
        borderRadius: 8,
        marginRight: 25,
    }
})

export default SearchHeader;