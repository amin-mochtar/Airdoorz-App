/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/Entypo';
// import HomeScreen from './src/screens/home/index'
// import Post from './src/components/Post/index'
// import Feed from './assets/data/feed'
import SearchResults from './src/screens/searchResult/index'

// const post1 = Feed[0]
export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      {/* <Post post={post1} /> */}
      <SearchResults />
    </SafeAreaView>
    </>
  )

}
const styles = StyleSheet.create({
 
})
