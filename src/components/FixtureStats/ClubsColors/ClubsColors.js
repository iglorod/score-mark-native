import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ClubsColors = ({ homeName, awayName }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.club}>
        <View style={[styles.square, { backgroundColor: colors.secondaryBackground }]}></View>
        <Text style={styles.text}>{homeName}</Text>
      </View>
      <View style={styles.club}>
        <View style={[styles.square, { backgroundColor: colors.thirdBackground }]}></View>
        <Text style={styles.text}>{awayName}</Text>
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
  square: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  text: {
    color: '#fff',
  }
})
