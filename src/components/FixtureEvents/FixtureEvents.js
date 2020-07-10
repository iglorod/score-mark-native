import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Event from './Event/Event';

const FixtureEvents = ({ fixture }) => {
  const navigation = useNavigation();

  const homeTeam = fixture.homeTeam;
  const awayTeam = fixture.awayTeam;

  const openPlayer = (playerId) => {
    navigation.navigate('Player', { id: playerId })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={fixture.events}
        renderItem={({ item }) => (
          <Event
            event={item}
            team={item.team_id === homeTeam.team_id ? homeTeam : awayTeam}
            onPress={openPlayer.bind(this, item.player_id)} />
        )}
        keyExtractor={(item, key) => key} />
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
