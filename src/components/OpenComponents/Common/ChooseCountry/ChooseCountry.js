import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Card from '../../../UI/Card/Card';
import StepProgress from '../../../UI/StepProgress/StepProgress';
import PopularLeagues from '../../../PopularLeagues/PopularLeagues';
import SearchCountry from './SearchCountry/SearchCountry';

const ChooseCountry = (props) => {
  const navigation = useNavigation();
  const nextButtonAvailible = Object.keys(props.selectedCountry).length > 0 || Object.keys(props.selectedLeague).length > 0;

  const onCountryPress = (country) => {
    props.setPopularLeagueSelected(false);
    props.setSelectedLeague({});
    props.setSelectedCountry(country);
  }

  const onLeaguePress = (league) => {
    props.setSelectedCountry({});
    props.setSelectedLeague(league);
    props.setPopularLeagueSelected(true);
  }

  const onNextHandler = () => {
    if (nextButtonAvailible && props.openLeague) {
      navigation.navigate('League', props.selectedLeague);
    } else if (nextButtonAvailible && props.openLeagueMatches) {
      navigation.navigate('LeagueFixtures', props.selectedLeague);
    } else if (nextButtonAvailible) {
      props.onNext();
    }
  }

  return (
    <Card style={{ flexDirection: 'column' }}>
      <StepProgress
        progress={props.step}
        onBack={() => { props.setSelectedCountry({}); props.onBack(); }}
        onNext={onNextHandler}
        nextButtonAvailible={nextButtonAvailible}
      />
      
      <PopularLeagues selectedLeague={props.selectedLeague} setSelectedLeague={onLeaguePress} />

      <SearchCountry selectedCountry={props.selectedCountry} setSelectedCountry={onCountryPress} />
    </Card>
  )
}

export default ChooseCountry;
