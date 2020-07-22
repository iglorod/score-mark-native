import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { debounce } from 'lodash';

import { fetchClubs } from '../../../../../FakeData/FakeData';

const ClubsResults = ({ searchText }) => {
  const [clubs, setClubs] = useState([]);

  const debounceSearch = useRef(debounce((word) => {
    fetchClubs(word)
      .then(response => response.api.results.teams)
      .then(teams => setClubs(teams))
      .catch(error => console.log(error.message))
  }, 800)).current;
  
  useEffect(() => {
    if (searchText.length < 3) {
      setClubs([]);
      debounceSearch.cancel();
      return;
    }

    debounceSearch(searchText);
  }, [searchText])

  return (
    <View style={styles.container}>
      {
        clubs.map((club, index) => (
          <View style={styles.clubItem} key={index}>
            <View style={styles.logoWrapper}>
              <Image style={styles.image} source={{uri: club.logo}} />
            </View>

            <View>
              <Text style={styles.clubName}>{club.name}</Text>
              <Text style={styles.clubDescription}>{club.country}, {club.venue_city}</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default ClubsResults;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans-Regular',
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#F96F5D',
  },
  clubName: {
    color: '#fff',
    fontSize: 20,
  },
  clubDescription: {
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
  clubItem: {
    flexDirection: 'row',
    marginVertical: 10,
  }
})
