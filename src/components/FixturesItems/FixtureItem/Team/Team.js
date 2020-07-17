import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { useTheme } from '@react-navigation/native';

const Team = ({ fixture, winningPercent, away, openClub }) => {
  const { colors } = useTheme();

  const team = away ? fixture.awayTeam : fixture.homeTeam;

  return (
    <View style={away ? styles.awayContainer : styles.container}>
      <View>
        <Image source={{ uri: team.logo }} style={styles.teamLogo} />
      </View>

      <View style={styles.dateArea}>
        <TouchableOpacity onPress={openClub.bind(this, team)}>
          <Text numberOfLines={1}>{team.team_name}</Text>
        </TouchableOpacity>
        <Text style={styles.additionalData}>{fixture.round}</Text>
        <ProgressBar
          progress={winningPercent.replace(/%/, '') * 0.01}
          color={colors.secondaryText}
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
