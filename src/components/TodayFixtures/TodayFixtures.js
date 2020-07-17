import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

import FixtureItem from '../FixturesItems/FixturesItems';
import FetchingSpinner from '../UI/FetchingSpinner/FetchingSpinner';
import { todayFixtures } from '../../FakeData/FakeData';

const TodayFixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  const { colors } = useTheme();

  useEffect(() => {
    todayFixtures()
      .then(response => response.api.results.fixtures)
      .then(fixtures => setFixtures(fixtures))
      .catch(error => console.log(error))
  }, [])

  let content = <FetchingSpinner color={'#fff'} />;
  if (fixtures.length > 0) {
    content = <FixtureItem fixtures={fixtures} />
  }

  const todayDate = new Date().toDateString();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.clubDataContainer}>
          <Icon name={'calendar-today'} size={100} color={colors.secondaryText} />

          <View style={styles.dateContainer}>
            <Text style={styles.date}>{todayDate}</Text>
            <Text style={styles.note}>Dignissim sodales ut integer *</Text>
          </View>
        </View>

        {content}
      </View>
    </ScrollView>
  )
}

export default TodayFixtures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  clubDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '70%',
  },
  date: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'OpenSans-SemiBold',
  },
  note: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  }
})
