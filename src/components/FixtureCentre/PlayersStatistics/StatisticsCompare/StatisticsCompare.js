import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatisticsCompare = ({ title, home, away }) => {
  let homeStyle = styles.homeStats;
  let awayStyle = styles.awayStats;

  if (home > away) {
    homeStyle = { ...homeStyle, ...styles.bold };
  }
  else if (home < away) {
    awayStyle = { ...awayStyle, ...styles.bold };
  }

  return (
    <View style={styles.statistics}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.body}>
        <Text style={homeStyle}>{home}</Text>
        <Text style={styles.dash}>•</Text>
        <Text style={awayStyle}>{away}</Text>
      </View>
    </View>
  )
}

export default StatisticsCompare;

const styles = StyleSheet.create({
  statistics: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 100,
  },
  title: {
    color: '#000',
  },
  homeStats: {
    fontSize: 16,
    color: '#008BE0',
  },
  awayStats: {
    fontSize: 16,
    color: '#EB5B14',
  },
  dash: {
    paddingHorizontal: 5,
    color: 'rgba(0, 0, 0, 0.65)',
  },
  bold: {
    fontWeight: '500',
  },
  body: {
    alignItems: 'center',
  }
})
