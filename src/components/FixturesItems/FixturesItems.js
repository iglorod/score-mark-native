import React, { useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FixtureItem from './FixtureItem/FixtureItem';

const FixturesItems = ({ fixtures }) => {
  const navigation = useNavigation();

  const openFixture = useCallback((id) => {
    navigation.navigate('FixtureScreens', { id, })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={fixtures}
        renderItem={({ item }) => <FixtureItem fixture={item} onPress={openFixture.bind(this, item.fixture_id)} />}
        keyExtractor={(item, key) => key}
      />
    </View>
  )
}

export default FixturesItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
