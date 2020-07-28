import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useTheme } from '@react-navigation/native';

import LinksToScreens from '../../LinksToScreens/LinksToScreens';
import FetchingSpinner from '../../UI/FetchingSpinner/FetchingSpinner';
import { fetchAvailibleSeasonsActionCreator } from '../../../store/player/actions';

const Stats = (props) => {
  const [playerStats, setPlayerStats] = useState([]);

  const { colors } = useTheme();
  const { stats, fetchAvailibleSeasons } = props;

  useEffect(() => {
    fetchAvailibleSeasons();
  }, [fetchAvailibleSeasons])

  useEffect(() => {
    moveTeamDataToTable(stats);
  }, [stats])

  const moveTeamDataToTable = (data) => {
    let dataSource = [];

    dataSource = data.map(league => ([
      league.league,
      league.games.appearences,
      league.games.minutes_played,
      league.goals.total,
      league.goals.assists,
      (+league.rating).toFixed(1),
    ]))

    setPlayerStats(dataSource);
  }

  if (stats.length === 0) return <FetchingSpinner color={'#fff'} />;

  const tableHead = ['Trm', 'GM', 'Mins', 'GL', 'AS', 'Rtg'];

  return (
    <ScrollView>
      <LinksToScreens
        values={[
          {
            name: 'Sidelines',
            path: 'Sidelined',
          },
          {
            name: 'Transfers',
            path: 'Transfers',
          },
        ]} />

      <Text style={styles.title}>Statistics, {stats[0].player_name}</Text>
      <View style={[styles.container, { backgroundColor: colors.secondaryBackground }]}>
        <Table>
          <Row data={tableHead} style={[styles.head, { backgroundColor: colors.thirdBackground }]} textStyle={styles.text} />
          <Rows data={playerStats} textStyle={styles.text} />
        </Table>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.plr.stats,
    availibleSeasons: state.plr.availibleSeasons,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAvailibleSeasons: () => { dispatch(fetchAvailibleSeasonsActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    margin: 15,
    borderRadius: 5,
    fontFamily: 'OpenSans-Regular',
  },
  head: {
    height: 40,
    borderRadius: 5,
  },
  text: {
    margin: 6,
    marginTop: 20,
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: '10%',
  }
})
