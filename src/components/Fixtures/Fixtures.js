import React from 'react';
import { View, Text } from 'react-native';

const Fixtures = ({ navigation }) => {
  return (
    <View>
      <Text onPress={navigation.navigate.bind(this, 'Fixture')}>Fixtures</Text>
    </View>
  )
}

export default Fixtures;
