import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

import FixtureItem from '../FixturesItems/FixturesItems';
import FetchingSpinner from '../UI/FetchingSpinner/FetchingSpinner';
import { todayFixtures } from '../../FakeData/FakeData';

const LeagueFixtures = ({ route }) => {
  const [fixtures, setFixtures] = useState([]);

  const { colors } = useTheme();

  useEffect(() => {
    todayFixtures(route.params.league_id)
      .then(response => response.api.results.fixtures)
      .then(fixtures => setFixtures(fixtures))
      .catch(error => console.log(error))
  }, [])

  let content = <FetchingSpinner color={'#fff'} />;
  if (fixtures.length > 0) {
    content = <FixtureItem fixtures={fixtures} />
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.leagueData}>
          <Image style={styles.image} source={{ uri: route.params.logo }} />

          <View style={styles.textContent}>
            <Text style={styles.leagueName} numberOfLines={1}>{route.params.name}</Text>
            <View style={styles.leaguePlaceContainer}>
              <Icon name={'place'} size={18} color={colors.secondaryText} />
              <Text style={[styles.leaguePlace, { color: colors.secondaryText }]}>{route.params.country}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.label}>Volutpat ac tincidunt vitae</Text>

        {content}
      </View>
    </ScrollView>
  )
}

export default LeagueFixtures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  leagueData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  image: {
    height: 70,
    width: 70,
  },
  textContent: {
    width: '80%',
    alignItems: 'center',
  },
  leagueName: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 5,
  },
  leaguePlaceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leaguePlace: {
    fontSize: 16,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 15,
  }
})
