import React, { useState, useEffect } from 'react';

import Team from './Team/Team';
import FixtureStatus from './FixtureStatus/FixtureStatus';
import Card from '../../UI/Card/Card';
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
    <Card style={{ justifyContent: 'center', paddingHorizontal: 10, marginVertical: 10, }}>
      <Team fixture={fixture} openClub={openClub} winningPercent={predictions ? predictions.winning_percent.home : '0'} />
      <FixtureStatus fixture={fixture} onPress={onPress} />
      <Team fixture={fixture} openClub={openClub} winningPercent={predictions ? predictions.winning_percent.away : '0'} away />
    </Card>
  )
}

export default React.memo(FixtureItem);
