import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const Country = ({ logo, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image height={100} width={'50%'} source={{ uri: logo }} />
    </TouchableOpacity>
  )
}

export default React.memo(Country);

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '30%',
    margin: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
  }
})
