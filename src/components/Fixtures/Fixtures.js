import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import FixturesItems from '../FixturesItems/FixturesItems';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import LinearGradientTitle from '../UI/LinearGradientTitle/LinearGradientTitle';
import { todayFixtures, fetchLeague } from '../../FakeData/FakeData';

const Fixtures = ({ route }) => {
  const [fixtures, setFixtures] = useState([]);
  const [league, setLeague] = useState({});
  const [loading, setLoading] = useState(true);

  const leagueId = route.params.leagueId;
  const round = route.params.round;

  useEffect(() => {
    Promise.all([
      todayFixtures(leagueId, round),
      fetchLeague(leagueId)
    ])
      .then(([fixturesResponse, leagueResponse]) => ([
        fixturesResponse.api.results.fixtures,
        leagueResponse.api.results.leagues[0],
      ]))
      .then(([fixtures, league]) => {
        setFixtures(fixtures);
        setLeague(league);
      })
      .then(() => setLoading(false))
      .catch(error => console.log(error.message))
  }, [])

  if (loading) return <ModalSpinner />;

  return (
    <>
      <LinearGradientTitle>
        <Image style={styles.image} source={{ uri: league.logo }} />
        <Text style={styles.round}>{round}</Text>
      </LinearGradientTitle>

      <View style={styles.container}>
        <FixturesItems fixtures={fixtures} />
      </View>
    </>
  )
}

export default Fixtures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 70,
    width: 70,
  },
  round: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
    paddingTop: 5,
  }
})
