import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Countries from '../Countries/Countries';
import Leagues from '../Leagues/Leagues';

const SelectLeague = ({ onPress }) => {
  const [country, setCountry] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <Countries selectedCountry={country} onChoose={setCountry} />
      <Leagues country={country} onPress={onPress} />
    </ScrollView>
  )
}

export default SelectLeague;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
