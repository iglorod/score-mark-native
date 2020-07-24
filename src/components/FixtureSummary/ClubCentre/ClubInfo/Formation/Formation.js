import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Formation = ({ formation }) => {
  return (
    <View style={styles.container}>
      <Icon name={'chart-timeline'} size={20} color={'#cecece'} />
      <Text style={styles.label}>Formation</Text>
      <Text style={styles.formation}>{formation}</Text>
    </View>
  )
}

export default Formation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    color: '#cecece',
    paddingHorizontal: 5
  },
  formation: {
    color: '#fff',
  }
})
