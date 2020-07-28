import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const StatisticsCompare = ({ title, home, away }) => {
  const { colors } = useTheme();

  let homeStyle = [{ color: colors.secondaryBackground }, styles.stats];
  let awayStyle = [{ color: colors.thirdBackground }, styles.stats];

  if (home > away) {
    homeStyle = [homeStyle, styles.bold];
  }
  else if (home < away) {
    awayStyle = [awayStyle, styles.bold];
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
    fontFamily: 'OpenSans-Regular',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 100,
  },
  title: {
    color: '#fff',
  },
  stats: {
    fontSize: 16,
  },
  dash: {
    paddingHorizontal: 5,
    color: '#fff',
  },
  bold: {
    fontFamily: 'OpenSans-Bold',
  },
  body: {
    alignItems: 'center',
  }
})
