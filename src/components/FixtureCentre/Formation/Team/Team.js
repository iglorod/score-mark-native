import React from 'react';
import { View, StyleSheet } from 'react-native';

import PlayersColumn from './PlayersColumn/PlayersColumn';

const Team = ({ formation, team, playersStats, away }) => {
  const order = ['G', 'D', 'M', 'F'];
  const showedPlayers = new Set();

  const formationWithGk = ('1-' + formation).split('-');
  if (away) {
    formationWithGk.reverse();
    order.reverse();
  }

  return (
    <View style={styles.teamPositions}>
      {
        formationWithGk.map((playersCount, index, arr) => (
          <PlayersColumn
            key={index}
            count={playersCount}
            showedPlayers={showedPlayers}
            team={team}
            order={order}
            playersStats={playersStats}
            away={away}
            width={100 / arr.length} />
        ))
      }
    </View>
  )
}

export default Team;

const styles = StyleSheet.create({
  teamPositions: {
    flexDirection: 'row',
    height: '100%',
    width: '50%',
  }
})
