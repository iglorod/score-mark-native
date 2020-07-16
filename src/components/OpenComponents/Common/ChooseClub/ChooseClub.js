import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import Card from '../../../UI/Card/Card';
import FetchingSpinner from '../../../UI/FetchingSpinner/FetchingSpinner';
import StepProgress from '../../../UI/StepProgress/StepProgress';
import { fetchClubs } from '../../../../FakeData/FakeData';
import Avatar from '../../../UI/Avatar/Avatar';

const ChooseClub = (props) => {
  const [teams, setTeams] = useState([]);

  const { selectedLeague, selectedClub, setSelectedClub } = props;
  const { colors } = useTheme();
  const navigation = useNavigation();

  const nextButtonAvailible = Object.keys(props.selectedClub).length > 0;

  useEffect(() => {
    fetchClubs(selectedLeague.league_id)
      .then(response => response.api.results.teams)
      .then(teams => setTeams(teams))
      .catch(error => console.log(error))
  }, [])

  let content = <FetchingSpinner color={colors.text} />;
  if (teams.length > 0) {
    content = (
      <ScrollView contentContainerStyle={styles.avatarContainer} horizontal>
        {
          teams.map((team, index) => (
            <Avatar
              key={index}
              size={70}
              onPress={setSelectedClub.bind(this, team)}
              selected={team.team_id === selectedClub.team_id}
            >
              <Image style={styles.image} source={{ uri: team.logo }} />
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
        onBack={() => { setSelectedClub({}); props.onBack(); }}
        onNext={navigation.navigate.bind(this, 'ClubFixtures', selectedClub)}
        nextButtonAvailible={nextButtonAvailible} />

      {content}
    </Card>
  )
}

export default ChooseClub;

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    marginBottom: 15,
  },
  image: {
    height: '90%',
    width: '90%',
  }
})
