import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LeagueItem from './LeagueItem/LeagueItem';
import FetchingSpinner from '../UI/FetchingSpinner/FetchingSpinner';
import { LeagesByCountry } from '../../FakeData/FakeData';
import { useNavigation } from '@react-navigation/native';

const Leagues = ({ country }) => {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (!country) {
      setLeagues([]);
      return;
    }

    setLoading(true);
    LeagesByCountry(country.code)
      .then(response => response.api.results.leagues)
      .then(leagues => setLeagues(leagues))
      .then(() => setLoading(false))
      .catch(error => console.log(error.message))
  }, [country])

  const openLeague = useCallback((league) => {
    navigation.navigate('League', { ...league, })
  }, [])

  if (loading) return <FetchingSpinner />

  let countryHeader = null;
  if (country) {
    countryHeader = (
      <View>
        <Text style={styles.header}>{country.country} Leagues</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {countryHeader}

      {
        leagues.map((item, index) => (
          <LeagueItem key={index} league={item} onPress={openLeague.bind(this, item)} />
        ))
      }
    </View>
  )
}

export default Leagues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleCountry: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
    textTransform: 'uppercase',
    marginTop: 10,
  },
  subTitleCountry: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },
  flagBackground: {
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    marginTop: 25,
    paddingBottom: 10,
  }
})
