import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClubsColors = ({ homeName, awayName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.club}>
        <View style={styles.firstColor}></View>
        <Text>{homeName}</Text>
      </View>
      <View style={styles.club}>
        <View style={styles.secondColor}></View>
        <Text>{awayName}</Text>
      </View>
    </View>
  )
}

export default ClubsColors;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  club: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  firstColor: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    backgroundColor: '#138B86',
  },
  secondColor: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    backgroundColor: '#F6AE2D',
  }
})
