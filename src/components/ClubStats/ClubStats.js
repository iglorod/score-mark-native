import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ComparePercents from '../UI/ComparePercents/ComparePercents';

const ClubStats = ({ stats }) => {
  if (stats === null) return null;

  return (
    <ScrollView style={styles.container}>
      <ComparePercents
        title={'Match played Home/Away'}
        first={stats.matchs.matchsPlayed.home}
        last={stats.matchs.matchsPlayed.away} />
      <ComparePercents
        title={'Match wins Home/Away'}
        first={stats.matchs.wins.home}
        last={stats.matchs.wins.away} />
      <ComparePercents
        title={'Match draws Home/Away'}
        first={stats.matchs.draws.home}
        last={stats.matchs.draws.away} />
      <ComparePercents
        title={'Match loses Home/Away'}
        first={stats.matchs.loses.home}
        last={stats.matchs.loses.away} />
      <ComparePercents
        title={'Goals for Home/Away'}
        first={stats.goals.goalsFor.home}
        last={stats.goals.goalsFor.away} />
      <ComparePercents
        title={'Goals against Home/Away'}
        first={stats.goals.goalsAgainst.home}
        last={stats.goals.goalsAgainst.away} />
      <ComparePercents
        title={'Goals for / Goals against'}
        first={stats.goals.goalsFor.total}
        last={stats.goals.goalsAgainst.total} />
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.club.stats,
  }
}

export default connect(mapStateToProps)(ClubStats);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
