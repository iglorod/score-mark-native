import React from 'react';
import { View, StyleSheet } from 'react-native';

const StoredItem = () => {
  return (
    <View style={styles.container}></View>
  )
}

export default StoredItem;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#fff',
  }
})
