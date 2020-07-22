import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { debounce } from 'lodash';

import { LeagesByCountry } from '../../../../../FakeData/FakeData';

const LeaguesResults = ({ searchText }) => {
  const [leagues, setLeagues] = useState([]);

  const debounceSearch = useRef(debounce((word) => {
    LeagesByCountry(word)
      .then(response => response.api.results.leagues)
      .then(leagues => setLeagues(leagues))
      .catch(error => console.log(error.message))
  }, 800)).current;
  
  useEffect(() => {
    if (searchText.length < 3) {
      setLeagues([]);
      debounceSearch.cancel();
      return;
    }

    debounceSearch(searchText);
  }, [searchText])

  return (
    <View style={styles.container}>
      {
        leagues.map((league, index) => (
          <View style={styles.leagueItem} key={index}>
            <View style={styles.logoWrapper}>
              <Image style={styles.image} source={{uri: league.logo}} />
            </View>

            <View>
              <Text style={styles.leagueName}>{league.name}</Text>
              <Text style={styles.leagueDescription}>{league.country}</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default LeaguesResults;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans-Regular',
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#7CC47F',
  },
  leagueName: {
    color: '#fff',
    fontSize: 20,
  },
  leagueDescription: {
    color: '#fff',
    fontSize: 16,
  },
  logoWrapper: {
    padding: 5,
    marginRight: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  image: {
    height: 70,
    width: 70,
  },
  leagueItem: {
    flexDirection: 'row',
    marginVertical: 10,
  }
})
