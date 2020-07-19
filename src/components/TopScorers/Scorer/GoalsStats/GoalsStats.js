import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalsStats = ({ player }) => {
  return (
    <View style={styles.goalsStats}>
      <View style={styles.itemContainer}>
        <Text style={styles.totalGoals}>{player.goals.total}</Text>
        <Text style={styles.label}>Scored</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.assistsGoals}>{player.goals.assists}</Text>
        <Text style={styles.label}>Assists</Text>
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
    color: '#fff',
    fontSize: 24,
    paddingRight: 5,
  },
  assistsGoals: {
    color: '#fff',
    fontSize: 20,
    paddingRight: 5,
  },
  label: {
    color: '#fff',
  }
})
