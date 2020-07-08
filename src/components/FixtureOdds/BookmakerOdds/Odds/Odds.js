import React from 'react';
import { View, FlatList } from 'react-native';

import Odd from './Odd/Odd';

const Odds = ({ odds }) => {
  return (
    <View>
      <FlatList
        data={odds}
        renderItem={({ item }) => (<Odd odd={item} />)}
        keyExtractor={(item, key) => key} />
    </View>
  )
}

export default Odds;
