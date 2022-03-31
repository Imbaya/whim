import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react';
import { OriginContextProvider, DestinationContextProvider } from './src/context/contexts'
import RootNavigator from './src/navigation/RootNavigator'
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import  AppLoading from 'expo-app-loading';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'proxima-light': require('./assets/fonts/proxima-light.otf'),
    'proxima-bold': require('./assets/fonts/proxima-bold.otf')
  });
};

const App = () => {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <DestinationContextProvider>
        <OriginContextProvider>
          <RootNavigator />
        </OriginContextProvider>
    </DestinationContextProvider>

  //GEORGIADIS IMBAYA

    //Jerry's Project
  

  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1
  }

})