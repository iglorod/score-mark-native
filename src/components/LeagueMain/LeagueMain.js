import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import OpenLargeSkeleton from '../UI/OpenLargeSkeleton/OpenLargeSkeleton';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import { setLastLeagueActionCreator } from '../../store/navbar/actions';
import { leagueStatnding, topScorers } from '../../FakeData/FakeData';

const LeagueMain = (props) => {
  const [standing, setStanding] = useState(null);
  const [scorers, setScorers] = useState(null);
  const [loading, setLoading] = useState(true);

  const { colors } = useTheme();
  const { navigation, route } = props;
  const leagueId = route.params.league_id;

  useEffect(() => {
    Promise.all([leagueStatnding(leagueId), topScorers(leagueId)])
      .then(([standingResponse, scorersResponse]) => [
        standingResponse.api.results.standings,
        scorersResponse.api.results.topscorers,
      ])
      .then(([standing, scorers]) => {
        setStanding(standing);
        setScorers(scorers);
      })
      .then(() => setLoading(false))
      .catch(error => console.log(error.message))

    AsyncStorage.setItem('LAST_LEAGUE', JSON.stringify(route.params))
    props.setLastLeague(route.params);
  }, [props.setLastLeague])

  if (loading) return <ModalSpinner />;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{route.params.name}, {route.params.country}</Text>

        <OpenLargeSkeleton
          headerText={standing[0].description}
          headerIcon={'table'}
          title={'League Standing'}
          subTitle={`${standing.length} clubs`}
          subTitleIcon={'cards-club'}
          bottomText={standing[0].lastUpdate}
          bottomIcon={'update'}
          backgroundColor={colors.secondaryBackground}
          onPress={navigation.navigate.bind(this, 'Standing', { leagueId })} />
        <OpenLargeSkeleton
          headerText={standing[0].description}
          headerIcon={'target-account'}
          title={'Top Scorers'}
          subTitle={`${scorers.length} players`}
          subTitleIcon={'thermostat'}
          bottomText={standing[0].lastUpdate}
          bottomIcon={'update'}
          backgroundColor={colors.thirdBackground}
          onPress={navigation.navigate.bind(this, 'Top Scorers', { leagueId })} />
      </View>
    </ScrollView>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setLastLeague: (league) => { dispatch(setLastLeagueActionCreator(league)) },
  }
}

export default connect(null, mapDispatchToProps)(LeagueMain);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginLeft: 20,
  }
})
