import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalsStats = ({ player }) => {
  return (
    <View style={styles.goalsStats}>
      <View style={styles.itemContainer}>
        <Text style={styles.totalGoals}>{player.goals.total}</Text>
        <Text>Scored</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.assistsGoals}>{player.goals.assists}</Text>
        <Text>Assists</Text>
      </View>
    </View>
  )
}

export default GoalsStats;

const styles = StyleSheet.create({
  goalsStats: {
    display: 'flex',
    textAlign: 'left',
    fontSize: 16,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalGoals: {
    color: '#000',
    fontSize: 24,
    paddingRight: 5,
  },
  assistsGoals: {
    color: '#000',
    fontSize: 20,
    paddingRight: 5,
  }
})
