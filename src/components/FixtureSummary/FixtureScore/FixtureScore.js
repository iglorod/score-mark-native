import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FixtureScore = ({ homeGoals, awayGoals, statusShort }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{homeGoals} : {awayGoals}</Text>
      <Text style={styles.status}>{statusShort}</Text>
    </View>
  )
}

export default FixtureScore;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  score: {
    fontSize: 26,
  },
  status: {
    color: '#138B86',
    fontSize: 20,
  }
})
