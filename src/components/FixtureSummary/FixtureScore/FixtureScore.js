import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const FixtureScore = ({ homeGoals, awayGoals, statusShort }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.score}>{homeGoals} : {awayGoals}</Text>
      <Text style={[styles.status, { color: colors.secondaryBackground }]}>{statusShort}</Text>
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
    color: '#fff',
    fontSize: 26,
  },
  status: {
    fontSize: 20,
  }
})
