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
import HomeScreen from './src/screens/home/index'

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
    </>
  )

}
const styles = StyleSheet.create({
 
})
