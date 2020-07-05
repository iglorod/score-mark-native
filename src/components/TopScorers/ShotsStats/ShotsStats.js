import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { useTheme } from '@react-navigation/native';

const ShotsStats = ({ player }) => {
  const { colors } = useTheme();
  const shortsOnTargetPercent = Math.trunc(player.shots.on * 100 / player.shots.total) / 100;


  return (
    <View style={styles.container}>
      <View style={styles.statsTitle}>
        <Text>Sts on target</Text>
        <ProgressBar
          color={colors.primary}
          style={styles.progressBar}
          styleAttr='Horizontal'
          indeterminate={false}
          progress={shortsOnTargetPercent} />
      </View>

      <View style={styles.statsData}>
        <Text>Total</Text>
        <Text style={styles.totalShots}>{player.shots.total}</Text>
      </View>
    </View>
  )
}

export default ShotsStats;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
  },
  statsTitle: {
    display: 'flex',
    marginRight: 10,
  },
  statsData: {
    display: 'flex',
  },
  totalShots: {
    fontSize: 20,
  },
  progressBar: {
    width: 80,
  }
})
