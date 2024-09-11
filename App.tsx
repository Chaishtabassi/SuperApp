import { StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import StackNavigation from './Src/Navigation/StackNavigation'

const App = () => {
  return (
    <View style={styles.container}>
       <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <StackNavigation/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})