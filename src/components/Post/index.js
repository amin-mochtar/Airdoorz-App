import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Post = () => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.image} 
            source={{uri: 'https://cdn-2.tstatic.net/solo/foto/bank/images/hotel-alila-solo_20160331_155640.jpg'}} 
            />
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
            <Text style={styles.descriptions} numberOfLines={2}>
                Hotel yang diyakini sebagai hotel mewah berstandar internasional pertama di kota yang berada di Jawa Tengah ini, menyediakan 255 kamar hotel. 
                Masing-masing kamar menyuguhkan pemandangan Kota Solo dan sekitarnya. 
                Jika anda akan berkunjung ke Solo dan ingin mencoba kualitas kenyamanan hotel berstandar internasional ini, hotel Alila dapat menjadi salah satu pilihan anda ketika di kota Solo.
            </Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.price} > $30</Text>
            </Text>

            <Text style={styles.totalPrice}>$200 total</Text>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10
    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 18,
        lineHeight: 26
    },
    prices: {
        fontSize: 18,
        marginVertical: 10, 
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through'
    },
    price: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    }
})
