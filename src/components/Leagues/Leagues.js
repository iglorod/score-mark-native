import React from 'react';
import { View, Text } from 'react-native';

const Leagues = ({ navigation, route }) => {
  const { country, code, flag } = route.params;
  console.log(route.params)

  navigation.setOptions({ title: `${country} Leagues` })

  return (
    <View>
      <Text>Leagues</Text>
    </View>
  )
}

export default Leagues;
