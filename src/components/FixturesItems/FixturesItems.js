import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FixtureItem from './FixtureItem/FixtureItem';

const FixturesItems = ({ fixtures }) => {
  const navigation = useNavigation();

  const openFixture = useCallback((fixture) => {
    navigation.navigate('FixtureScreens', {
      fixture_id: fixture.fixture_id,
      homeTeam: fixture.homeTeam,
      awayTeam: fixture.awayTeam,
      status: fixture.status,
    })
  }, [])

  const openClub = useCallback((club) => {
    navigation.navigate('ClubScreens', {
      screen: 'Club',
      params: club,
    })
  }, [])

  return (
    <View style={styles.container}>
      {
        fixtures.map((fixture, index) => (
          <FixtureItem
            key={index}
            fixture={fixture}
            openClub={openClub}
            onPress={openFixture.bind(this, fixture)} />
        ))
      }
    </View>
  )
}

export default FixturesItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
