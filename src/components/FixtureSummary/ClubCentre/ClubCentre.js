import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import ClubInfo from './ClubInfo/ClubInfo';
import Scorers from './Scorers/Scorers';

const ClubCentre = ({ club, lineups, events, away }) => {
  return (
    <View style={away ? styles.clubCentreAway : styles.clubCentre}>
      <View style={away ? styles.clubDataAway : styles.clubData}>
        <Image style={styles.image} source={{uri: club.logo}} />
        <ClubInfo club={club} lineups={lineups} away={away} />
      </View>
      <Scorers clubId={club.team_id} events={events} />
    </View>
  )
}

export default ClubCentre;

const styles = StyleSheet.create({
  clubCentre: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  clubCentreAway: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  clubData: {
    flexDirection: 'row',
    fontSize: 12,
    paddingBottom: 5,
  },
  clubDataAway: {
    fontSize: 12,
    flexDirection: 'row-reverse',
    paddingBottom: 5,
  },
  image: {
    height: 70,
    width: 70,
  }
})
