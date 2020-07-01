import React from 'react';
import { View, Text } from 'react-native';

const Leagues = ({ navigation }) => {
  return (
    <View>
      <Text onPress={navigation.navigate.bind(this, 'League')}>Leagues</Text>
    </View>
  )
}

export default Leagues;
