import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FixtureItem from './FixtureItem/FixtureItem';

const FixturesItems = ({ fixtures }) => {
  const navigation = useNavigation();

  const openFixture = useCallback((id) => {
    navigation.navigate('FixtureScreens', { id, })
  }, [])

  const openClub = useCallback((club) => {
    navigation.navigate('ClubsScreens', {
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
            onPress={openFixture.bind(this, fixture.fixture_id)} />
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
