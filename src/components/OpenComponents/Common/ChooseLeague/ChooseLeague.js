import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import Card from '../../../UI/Card/Card';
import FetchingSpinner from '../../../UI/FetchingSpinner/FetchingSpinner';
import StepProgress from '../../../UI/StepProgress/StepProgress';
import { LeagesByCountry } from '../../../../FakeData/FakeData';
import Avatar from '../../../UI/Avatar/Avatar';

const ChooseLeague = (props) => {
  const [leagues, setLeagues] = useState([]);

  const { selectedTypeId, selectedCountry, selectedLeague, setSelectedLeague } = props;
  const { colors } = useTheme();
  const navigation = useNavigation();

  const nextButtonAvailible = Object.keys(props.selectedLeague).length > 0;

  useEffect(() => {
    if (!selectedCountry.country) return;
    
    LeagesByCountry(selectedCountry.country)
      .then(response => response.api.results.leagues)
      .then(leagues => setLeagues(leagues))
      .catch(error => console.log(error))
  }, [selectedCountry])

  const onNextHandler = () => {
    if (selectedTypeId === 0 || props.openClub) props.onNext();       //if type (was choosed in prev-prev step) === Club
    else if (selectedTypeId === 1) navigation.navigate('LeagueFixtures', selectedLeague);   //if type === League
    else if (props.openLeague) navigation.navigate('League', selectedLeague);
  }

  let content = <FetchingSpinner color={colors.text} />;
  if (leagues.length > 0) {
    content = (
      <ScrollView contentContainerStyle={styles.avatarContainer} horizontal>
        {
          leagues.map((league, index) => (
            <Avatar
              key={index}
              size={70}
              onPress={setSelectedLeague.bind(this, league)}
              selected={league.league_id === selectedLeague.league_id}
            >
              <Image style={styles.image} source={{ uri: league.logo }} />
            </Avatar>
          ))
        }
      </ScrollView>
    )
  }

  return (
    <Card style={{ flexDirection: 'column' }}>
      <StepProgress
        progress={props.step}
        onBack={() => { setSelectedLeague({}); props.onBack(); }}
        onNext={onNextHandler}
        nextButtonAvailible={nextButtonAvailible} />

      {content}
    </Card>
  )
}

export default ChooseLeague;

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    marginBottom: 15,
  },
  image: {
    height: '90%',
    width: '60%',
  }
})
