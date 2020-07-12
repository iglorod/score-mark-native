import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const Country = ({ logo, onPress }) => {
  console.log(logo);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image height={100} width={'100%'} source={{ uri: logo }} />
    </TouchableOpacity>
  )
}

export default React.memo(Country);

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '30%',
    margin: 5,
    backgroundColor: 'red',
  }
})
