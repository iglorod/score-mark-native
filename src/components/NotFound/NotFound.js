import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const NotFound = ({ text, color = '#fff' }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/thinkMan.png')} />

      <Text style={[styles.text, { color: color }]}>{text}</Text>
    </View>
  )
}

export default NotFound;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  image: {
    height: '100%',
    width: '50%',
  },
  text: {
    fontSize: 24,
    fontFamily: 'OpenSans-Regular',
    textTransform: 'uppercase',
    marginVertical: 10,
    textAlign: 'center',
  }
})
