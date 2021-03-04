import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Pressable, Dimensions } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from '@react-navigation/native'

const index = () => {
    const navigation = useNavigation()
    return (
        <View>
            {/* search bar */}
            <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Destination')} >
                <Fontisto name="search" size={24} color={'#f15454'} />
                <Text style={styles.searchButtonText} >Where are you going</Text>
            </Pressable>
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image} >

            {/* title */}
            <Text style={styles.title} >Go Near</Text>
            <Pressable style={styles.button} onPress={() => console.warn('explore btn clicked')} >
                <Text style={styles.buttonText} >Explore nearby stays</Text>
            </Pressable>
            </ImageBackground>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
        
    },
    button: {
        backgroundColor: 'white',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 275,
        marginLeft: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchButton: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width - 20,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 30,
        zIndex: 100,
        elevation: (Platform.OS === 'android') ? 50 : 0
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})
