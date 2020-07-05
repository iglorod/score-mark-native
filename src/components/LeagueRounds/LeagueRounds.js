import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Round from './Round/Round';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import { leagueRounds, currentLeagueRound } from '../../FakeData/FakeData';

const LeagueRounds = ({ navigation, route }) => {
  const [rounds, setRounds] = useState([]);
  const [currentRound, setCurrentRound] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    leagueRounds(route.params.id)
      .then(response => response.api.results.fixtures)
      .then(rounds => rounds.reverse())
      .then(rounds => setRounds(rounds))
      .then(() => setLoading(false))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    currentLeagueRound(route.params.id)
      .then(response => response.api.results.fixtures[0])
      .then(round => setCurrentRound(round))
      .catch(error => console.log(error))
  })

  const openFixturesList = useCallback((round) => {
    navigation.navigate('FixturesScreens', {
      screen: 'Fixtures',
      params: { leagueId: route.params.id, round, }
    })
  }, [])

  if (loading) return <ModalSpinner />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Icon name={'layers'} size={20} color={'#000'} /> {'Football Tours'}
      </Text>

      <FlatList
        data={rounds}
        renderItem={({ item: round }) => (
          <Round
            round={round}
            current={currentRound === round}
            onPress={openFixturesList.bind(this, round)} />
        )}
        keyExtractor={(item, key) => key}
        numColumns={3}
        horizontal={false}
        columnWrapperStyle={styles.column} />
    </View >
  )
}

export default LeagueRounds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  column: {
    justifyContent: 'space-evenly',
    width: '100%',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    marginBottom: 20,
  }
})
