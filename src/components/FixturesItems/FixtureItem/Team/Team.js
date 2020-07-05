import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

const Team = ({ fixture, winningPercent, away }) => {
  return (
    <View style={away ? styles.awayContainer : styles.container}>
      <View>
        <Image source={{ uri: fixture.homeTeam.logo }} style={styles.teamLogo} />
      </View>

      <View style={styles.dateArea}>
        <Text numberOfLines={1}>{fixture.homeTeam.team_name}</Text>
        <Text style={styles.additionalData}>{fixture.round}</Text>
        <ProgressBar
          progress={winningPercent.replace(/%/, '') * 0.01}
          styleAttr='Horizontal'
          indeterminate={false} />
      </View>
    </View>
  )
}

export default Team;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
  },
  awayContainer: {
    flex: 2,
    flexDirection: 'row-reverse',
  },
  teamLogo: {
    height: 70,
    width: 70,
  },
  dateArea: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  additionalData: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.65)',
    maxWidth: 150,
    overflow: 'hidden',
  }
})
