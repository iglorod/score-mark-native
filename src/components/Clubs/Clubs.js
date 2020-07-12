import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ClubItem from './ClubItem/ClubItem';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import { fetchClubs } from '../../FakeData/FakeData';

const Clubs = ({ navigation, route }) => {
  const [teams, setTeams] = useState([]);
  const leagueId = route.params.league_id;

  useEffect(() => {
    fetchClubs(leagueId)
      .then(response => response.api.results.teams)
      .then(teams => setTeams(teams))
      .catch(error => console.log(error.message))
  }, [])

  const openClub = useCallback((club) => {
    navigation.navigate('Club', { club });
  }, [])

  if (teams.length === 0) return <ModalSpinner />;

  return (
    <View style={styles.container}>
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <ClubItem
            logo={item.logo}
            onPress={openClub.bind(this, item)} />
        )}
        keyExtractor={(item, key) => key}
        numColumns={3}
        horizontal={false}
        columnWrapperStyle={styles.listStyle}
      />
    </View>
  )
}

export default Clubs;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    elevation: 2,
    backgroundColor: '#fff',
  },
  listStyle: {
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    marginTop: 25,
    paddingBottom: 10,
  }
})
