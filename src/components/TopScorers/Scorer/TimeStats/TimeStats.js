import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeStats = ({ player }) => {
  return (
    <View style={styles.timeStats}>
      <View>
        <Text style={styles.teamName}>{player.team_name}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.value}>{player.games.appearences}</Text>
        <Text style={styles.label}>Mins per Goal</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.value}>{player.games.minutes_played}</Text>
        <Text style={styles.label}>Mins played</Text>
      </View>
    </View>
  )
}

export default TimeStats;

const styles = StyleSheet.create({
  timeStats: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    fontFamily: 'OpenSans-Regular',
  },
  value: {
    color: '#fff',
  },
  label: {
    color: '#eee',
    paddingHorizontal: 5,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  teamName: {
    color: '#fff',
    fontFamily: 'OpenSans-SemiBold',
  }
})
