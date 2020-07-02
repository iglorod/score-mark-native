import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Country = ({ flag, onPress }) => {
  let countrieFlag = (
    <Image
      height={100}
      source={require('../../../assets/images/noFlag.png')} />
  )
  if (flag) {
    countrieFlag = (
      <SvgUri
        height={100}
        width={'100%'}
        uri={flag}
      />
    )
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {countrieFlag}
    </TouchableOpacity>
  )
}

export default React.memo(Country);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    elevation: 2,
    backgroundColor: '#fff',
  },
})
