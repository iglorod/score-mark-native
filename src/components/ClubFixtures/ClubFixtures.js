import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import FixtureItem from '../FixturesItems/FixturesItems';
import FetchingSpinner from '../UI/FetchingSpinner/FetchingSpinner';
import { setLastClubActionCreator } from '../../store/navbar/actions';
import { todayFixtures } from '../../FakeData/FakeData';

const ClubFixtures = (props) => {
  const [fixtures, setFixtures] = useState([]);

  const { route } = props;
  const { colors } = useTheme();

  useEffect(() => {
    todayFixtures(route.params.team_id)
      .then(response => response.api.results.fixtures)
      .then(fixtures => setFixtures(fixtures))
      .catch(error => console.log(error))

    AsyncStorage.setItem('LAST_CLUB', JSON.stringify(route.params))
    props.setLastClub(route.params);
  }, [props.setLastClub])

  let content = <FetchingSpinner color={'#fff'} />;
  if (fixtures.length > 0) {
    content = <FixtureItem fixtures={fixtures} />
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.clubDataContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: route.params.logo }} />
          </View>
          <Text style={styles.clubName} numberOfLines={1}>{route.params.name}</Text>
          <View style={styles.clubPlaceContainer}>
            <Icon name={'place'} size={20} color={colors.secondaryText} />
            <Text style={[styles.clubPlace, { color: colors.secondaryText }]}>
              {route.params.country}, {route.params.venue_city}
            </Text>
          </View>
        </View>

        {content}
      </View>
    </ScrollView>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setLastClub: (club) => { dispatch(setLastClubActionCreator(club)) },
  }
}

export default connect(null, mapDispatchToProps)(ClubFixtures);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  clubDataContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
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
  clubName: {
    color: '#fff',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 5,
  },
  clubPlaceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clubPlace: {
    fontSize: 18,
  }
})
