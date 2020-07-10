import React from 'react';
import { View, StyleSheet } from 'react-native';

import ClubName from './ClubName/ClubName';
import Manager from './Manager/Manager';
import Formation from './Formation/Formation';

const ClubInfo = ({ club, lineups, away }) => {
  return (
    <View style={away ? styles.clubInfoAway : styles.clubInfo}>
      <ClubName club={club} />
      <Manager coach={lineups.coach} />
      <Formation formation={lineups.formation} />
    </View>
  )
}

export default ClubInfo;

const styles = StyleSheet.create({
  clubInfo: {
    alignItems: 'center',
  },
  clubInfoAway: {
    alignItems: 'center',
  },
})
