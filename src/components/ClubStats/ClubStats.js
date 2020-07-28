import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import LinksToScreens from '../LinksToScreens/LinksToScreens';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import { fetchClubStatsActionCreator } from '../../store/club/actions';
import ComparePercents from '../UI/ComparePercents/ComparePercents';

const ClubStats = ({ stats, fetchClubStats }) => {
  useEffect(() => {
    fetchClubStats();
  }, [fetchClubStats])

  if (stats === null) return <ModalSpinner />;

  return (
    <View style={styles.container}>
      <LinksToScreens
        values={[
          {
            name: 'Squad',
            path: 'Squad',
          }
        ]} />

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
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.club.stats,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClubStats: () => { dispatch(fetchClubStatsActionCreator()) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClubStats);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  }
})
