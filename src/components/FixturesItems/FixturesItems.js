import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import FixtureItem from './FixtureItem/FixtureItem';

const FixturesItems = ({ fixtures }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={fixtures}
        renderItem={({ item }) => <FixtureItem fixture={item} />}
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
