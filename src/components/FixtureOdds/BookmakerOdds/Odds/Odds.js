import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Odd from './Odd/Odd';

const Odds = ({ odds }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={odds}
        renderItem={({ item }) => (<Odd odd={item} />)}
        keyExtractor={(item, key) => key} />
    </View>
  )
}

export default Odds;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})
