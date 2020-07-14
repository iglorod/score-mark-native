import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const Country = ({ logo, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: logo }} />
    </TouchableOpacity>
  )
}

export default React.memo(Country);

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '30%',
    margin: 5,
  },
  image: {
    height: 100,
    width: '95%',
  }
})
