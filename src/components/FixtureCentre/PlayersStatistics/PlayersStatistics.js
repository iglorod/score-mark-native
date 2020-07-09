import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import StatisticsCompare from './StatisticsCompare/StatisticsCompare';

const PlayersStatistics = (props) => {
  const [homePlayerStats, setHomePlayerStats] = useState({});
  const [awayPlayerStats, setAwayPlayerStats] = useState({});

  useEffect(() => {
    if (props.homePlayer.player_id) {
      const teamsPlayersStats = props.fixture.players;
      const playerStats = teamsPlayersStats.find(player => player.player_id === props.homePlayer.player_id)

      setHomePlayerStats(playerStats);
    } else {
      setHomePlayerStats({});
    }
  }, [props.homePlayer])

  useEffect(() => {
    if (props.awayPlayer.player_id) {
      const teamsPlayersStats = props.fixture.players;
      const playerStats = teamsPlayersStats.find(player => player.player_id === props.awayPlayer.player_id)

      setAwayPlayerStats(playerStats);
    } else {
      setAwayPlayerStats({});
    }
  }, [props.awayPlayer])

  return (
    <View style={styles.playersStatistics}>
      <StatisticsCompare
        title={'Shots'}
        home={homePlayerStats.player_id ? homePlayerStats.shots.on : '-'}
        away={awayPlayerStats.player_id ? awayPlayerStats.shots.on : '-'} />
      <StatisticsCompare
        title={'Goals'}
        home={homePlayerStats.player_id ? homePlayerStats.goals.total : '-'}
        away={awayPlayerStats.player_id ? awayPlayerStats.goals.total : '-'} />
      <StatisticsCompare
        title={'Passes %'}
        home={homePlayerStats.player_id ? homePlayerStats.passes.accuracy : '-'}
        away={awayPlayerStats.player_id ? awayPlayerStats.passes.accuracy : '-'} />
      <StatisticsCompare
        title={'Penalty'}
        home={homePlayerStats.player_id ? homePlayerStats.penalty.commited : '-'}
        away={awayPlayerStats.player_id ? awayPlayerStats.penalty.commited : '-'} />
      <StatisticsCompare
        title={'Tackles'}
        home={homePlayerStats.player_id ? homePlayerStats.tackles.total : '-'}
        away={awayPlayerStats.player_id ? awayPlayerStats.tackles.total : '-'} />
      <StatisticsCompare
        title={'Duels'}
        home={homePlayerStats.player_id ? homePlayerStats.duels.won : '-'}
        away={awayPlayerStats.player_id ? awayPlayerStats.duels.won : '-'} />
      <StatisticsCompare
        title={'Dribbles'}
        home={homePlayerStats.player_id ? homePlayerStats.dribbles.success : '-'}
        away={awayPlayerStats.player_id ? awayPlayerStats.dribbles.success : '-'} />
      <StatisticsCompare
        title={'Fouls'}
        home={homePlayerStats.player_id ? homePlayerStats.fouls.committed : '-'}
        away={awayPlayerStats.player_id ? awayPlayerStats.fouls.committed : '-'} />
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    fixture: state.fxt.fixture,
    homePlayer: state.fxt.homePlayer,
    awayPlayer: state.fxt.awayPlayer,
  }
}

export default connect(mapStateToProps)(PlayersStatistics);

const styles = StyleSheet.create({
  playersStatistics: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
})
