import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import StatsItem from './StatsItem/StatsItem';

const BriefStats = ({ stats }) => {
  if (!stats) return null;


  return (
    <View style={styles.briefStats}>
      <StatsItem
        tooltip={'Matchs played'}
        value={stats.matchs.matchsPlayed.total} />
      <StatsItem
        tooltip={'Wins - Loses matches'}
        value={stats.matchs.wins.total - stats.matchs.loses.total} />
      <StatsItem
        tooltip={'Goal difference'}
        value={stats.goals.goalsFor.total - stats.goals.goalsAgainst.total} />
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.club.stats,
  }
}

export default connect(mapStateToProps)(BriefStats);

const styles = StyleSheet.create({
  briefStats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    width: '100%',
  },
})
