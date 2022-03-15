import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { OriginContextProvider, DestinationContextProvider } from './src/context/contexts'
import RootNavigator from './src/navigation/RootNavigator'

const App = () => {
  return (
    <DestinationContextProvider>
        <OriginContextProvider>
          <RootNavigator />
        </OriginContextProvider>
    </DestinationContextProvider>
  
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1
  }

})