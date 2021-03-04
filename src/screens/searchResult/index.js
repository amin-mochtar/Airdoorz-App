import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import feed from '../../../assets/data/feed'
import Post from '../../components/Post/index'

const SearchResult = () => {
    return (
        <View>
            <FlatList 
            data={feed}
            renderItem={({item}) => <Post post={item} />}
            />
        </View>
    )
}

export default SearchResult

const styles = StyleSheet.create({})
