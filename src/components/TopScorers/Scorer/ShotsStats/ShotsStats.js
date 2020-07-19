import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

const ShotsStats = ({ player, progressColor }) => {
  const shortsOnTargetPercent = Math.trunc(player.shots.on * 100 / player.shots.total) / 100;


  return (
    <View style={styles.container}>
      <View style={styles.statsTitle}>
        <Text style={styles.label}>Sts on target</Text>
        <ProgressBar
          color={progressColor}
          style={styles.progressBar}
          styleAttr='Horizontal'
          indeterminate={false}
          progress={shortsOnTargetPercent} />
      </View>

      <View style={styles.statsData}>
        <Text style={styles.label}>Total</Text>
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
    color: '#fff',
  },
  progressBar: {
    width: 80,
  },
  label: {
    color: '#fff',
  }
})
