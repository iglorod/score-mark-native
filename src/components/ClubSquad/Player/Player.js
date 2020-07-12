import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StatsTooltip from './StatsTooltip/StatsTooltip';

const Player = ({ player, index, openPlayer }) => {
  return (
    <View style={styles.player}>
      <Text style={styles.order}>{index}</Text>

      <Text style={styles.playerName} onPress={openPlayer}>{player.firstname} {player.lastname}</Text>
      <Text style={styles.playerAgeAndPos}>{player.age}, {player.position}</Text>

      <Text>{player.height}</Text>
      <Text>{player.weight}</Text>

      <StatsTooltip text={'Lineups'} data={player.games.lineups} />
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
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  order: {
    color: '#000',
  },
  playerName: {
    color: '#000',
  },
  playerAgeAndPos: {
    fontSize: 10,
  },
  rating: {
    color: '#f57922',
  }
})
