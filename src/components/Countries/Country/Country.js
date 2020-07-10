import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Country = ({ flag, selected, onPress }) => {
  if (!flag) return null;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SvgUri style={{ opacity: selected ? .6 : 1 }} height={100} width={'100%'} uri={flag} />
    </TouchableOpacity>
  )
}

export default React.memo(Country);

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '30%',
    margin: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    elevation: 2,
    backgroundColor: '#fff',
  }
})
