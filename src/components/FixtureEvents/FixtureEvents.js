import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useTheme, useNavigation } from '@react-navigation/native';

import Event from './Event/Event';

const FixtureEvents = ({ fixture }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const homeTeam = fixture.homeTeam;
  const awayTeam = fixture.awayTeam;

  const openPlayer = (playerId) => {
    navigation.navigate('Player', { id: playerId })
  }

  return (
    <View style={styles.container}>
      {
        fixture.events.map((event, index) => (
          <Event
            key={index}
            event={event}
            team={event.team_id === homeTeam.team_id ? homeTeam : awayTeam}
            backgroundColor={(index % 2 === 0) ? colors.secondaryBackground : colors.thirdBackground}
            onPress={openPlayer.bind(this, event.player_id)} />
        ))
      }
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    fixture: state.fxt.fixture,
  }
}

export default connect(mapStateToProps)(FixtureEvents);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
})
