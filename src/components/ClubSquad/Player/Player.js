import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import StatsTooltip from './StatsTooltip/StatsTooltip';

const Player = ({ player, openPlayer, index }) => {
  const { colors } = useTheme();

  return (
    <View style={[
      styles.player,
      { backgroundColor: (index % 2 === 0) ? colors.secondaryBackground : colors.thirdBackground }
    ]}>
      <View>
        <Text style={styles.playerName} onPress={openPlayer}>{player.firstname} {player.lastname}</Text>
        <Text style={styles.playerAgeAndPos}>{player.age} y.o., {player.position}</Text>
      </View>

      <Text style={styles.whiteText}>{player.height}</Text>
      <Text style={styles.whiteText}>{player.weight}</Text>

      <StatsTooltip text={'Minutes played'} data={player.games.minutes_played} />
      <StatsTooltip text={'Goals'} data={player.goals.total || '-'} />
      <StatsTooltip text={'Assists'} data={player.goals.assists || '-'} />
      <StatsTooltip text={'Yellow cards'} data={player.cards.yellow} />
      <StatsTooltip text={'Red cards'} data={player.cards.red} />
      <StatsTooltip text={'Passes accuracy'} data={player.passes.accuracy} />
      <StatsTooltip text={'Interceptions'} data={player.tackles.interceptions} />
      <StatsTooltip text={'Dribbles success'} data={player.dribbles.success} />
      <StatsTooltip
        text={'Rating'}
        style={styles.rating}
        data={(+player.rating).toFixed(1)} />
    </View>
  )
}

export default Player;

const styles = StyleSheet.create({
  player: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  order: {
    color: '#fff',
  },
  playerName: {
    color: '#fff',
    fontSize: 16,
  },
  playerAgeAndPos: {
    color: '#fff',
    fontSize: 12,
  },
  rating: {
    color: '#fff',
    fontFamily: 'OpenSans-SemiBold',
  },
  whiteText: {
    color: '#fff',
    fontSize: 16,
  }
})
