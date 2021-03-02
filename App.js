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
  View,
  Text
} from 'react-native';


export default function App() {
  return (
    <View style={styles.viewContainer}>
      <Text>Plant App</Text>
    </View>
  )

}
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
