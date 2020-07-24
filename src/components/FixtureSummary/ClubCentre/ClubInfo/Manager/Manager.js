import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Manager = ({ coach }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.manager}>Manager:</Text>
      <Text style={styles.label}>{coach}</Text>
    </View>
  )
}

export default Manager;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  manager: {
    color: '#cecece',
  },
  label: {
    color: '#fff',
    paddingRight: 5,
  }
})
