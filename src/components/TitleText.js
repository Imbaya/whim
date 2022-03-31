import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';


const TitleText = props => (

  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>

);

const styles = StyleSheet.create({

  title: {
    fontFamily: 'proxima-bold',
   fontSize:   Dimensions.get('window').width * 0.065
  }

});

export default TitleText;
