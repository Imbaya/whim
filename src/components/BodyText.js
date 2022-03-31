import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: 'proxima-light',
    marginVertical: 4
  }
  
});

export default BodyText;
