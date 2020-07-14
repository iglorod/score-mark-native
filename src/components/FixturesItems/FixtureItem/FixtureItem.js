import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Team from './Team/Team';
import FixtureStatus from './FixtureStatus/FixtureStatus';

import { fixturePredictions } from '../../../FakeData/FakeData';

const FixtureItem = ({ fixture, openClub, onPress }) => {
  const [predictions, setPredictions] = useState(null);

  useEffect(() => {
    fixturePredictions()
      .then(response => response.api.results.predictions[0])
      .then(predictions => setPredictions(predictions))
      .catch(error => console.log(error.message))
  }, [])

  return (
    <View style={styles.container}>
      <Team fixture={fixture} openClub={openClub} winningPercent={predictions ? predictions.winning_percent.home : '0'} />
      <FixtureStatus fixture={fixture} onPress={onPress} />
      <Team fixture={fixture} openClub={openClub} winningPercent={predictions ? predictions.winning_percent.away : '0'} away />
    </View>
  )
}

export default React.memo(FixtureItem);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    paddingBottom: 10,
    marginTop: 10,
  }
})
