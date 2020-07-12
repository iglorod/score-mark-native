import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LeagueItem from './LeagueItem/LeagueItem';
import FetchingSpinner from '../UI/FetchingSpinner/FetchingSpinner';
import { LeagesByCountry } from '../../FakeData/FakeData';

const Leagues = ({ country, onPress }) => {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(false);

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
          <LeagueItem key={index} league={item} onPress={onPress.bind(this, item)} />
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
