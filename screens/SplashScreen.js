import React from 'react'
import {ImageBackground, StyleSheet, Text, View,Alert, Pressable } from 'react-native'


const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/splash1.jpg')} style={styles.image}>
                <View style={styles.flexPos}>
                    <Text style={styles.title}>Cooking Experience Like a Chef</Text>
                    <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid.</Text>

                    <Pressable 
                        style={({ pressed }) => [styles.button, pressed && { backgroundColor:'rgb(247, 124, 67)'}]}
                        onPress={() => {navigation.navigate('Home')}}r
                        TouchableHighlight
                        >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </Pressable>
                </View>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    flexPos: {
        marginBottom: 100,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },    
    image: {
        flex: 1,
        resizeMode: "cover",
        backgroundColor: 'rgba(0,0,0,1)',
        opacity: .85,
    },
    title: {
        color: 'white',
        fontSize: 36,
        fontFamily: 'Poppins_600SemiBold',
        textShadowRadius: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
        lineHeight: 50,
    },
    subTitle:{
        marginTop: 20,
        color: '#eee',
        fontSize: 16,
        paddingHorizontal: 40,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
    },
    button: {
        width: 200,
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'rgb(240, 140, 80)',
        marginTop: 50,
        padding: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
    }

});


export default SplashScreen;
