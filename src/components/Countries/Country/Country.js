import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Country = ({ flag, onPress }) => {
  if (!flag) return null;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SvgUri height={100} width={'100%'} uri={flag} />
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
