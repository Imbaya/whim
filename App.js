import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import HomeScreen from './src/screen/HomeScreen'


const App = () => {
  return (
    <View style = {styles.container} > 
      <HomeScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1
  }

})