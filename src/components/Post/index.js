import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Post = (props) => {
    const post = props.post
    return (
        <View style={styles.container}>
            <Image 
            style={styles.image} 
            source={{uri: `${post.image}`}} 
            />
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom}</Text>
            <Text style={styles.descriptions} numberOfLines={2}>
                {post.type} {post.title}
            </Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>{post.oldPrice}</Text>
                <Text style={styles.price} > {post.newPrice}</Text>
            </Text>

            <Text style={styles.totalPrice}>{post.total}</Text>
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
