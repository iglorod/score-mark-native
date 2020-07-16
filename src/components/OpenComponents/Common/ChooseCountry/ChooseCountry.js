import React from 'react';

import Card from '../../../UI/Card/Card';
import StepProgress from '../../../UI/StepProgress/StepProgress';
import PopularLeagues from '../../../PopularLeagues/PopularLeagues';
import SearchCountry from './SearchCountry/SearchCountry';

const ChooseCountry = (props) => {
  const nextButtonAvailible = Object.keys(props.selectedCountry).length > 0;

  return (
    <Card style={{ flexDirection: 'column' }}>
      <StepProgress
        progress={props.step}
        onBack={() => { props.setSelectedCountry({}); props.onBack(); }}
        onNext={nextButtonAvailible ? props.onNext : null}
        nextButtonAvailible={nextButtonAvailible}
      />
      <PopularLeagues />

      <SearchCountry selectedCountry={props.selectedCountry} setSelectedCountry={props.setSelectedCountry} />
    </Card>
  )
}

export default ChooseCountry;
