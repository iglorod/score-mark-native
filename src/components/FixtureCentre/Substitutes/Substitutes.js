import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; 

import Substitute from './Substitute/Substitute';

const Substitutes = (props) => {
  const { fixture, away } = props;
  const navigation = useNavigation();
  
  const HomeTeamName = fixture.homeTeam.team_name;
  const AwayTeamName = fixture.awayTeam.team_name;
  
  let substitutes = fixture.lineups[HomeTeamName].substitutes;
  if (away) {
    substitutes = fixture.lineups[AwayTeamName].substitutes;
  }
  
  const openPlayer = useCallback((player) => {
    navigation.navigate('PlayerScreens', player);
  }, [])

  return (
    <View style={styles.container}>
      {
        substitutes.map((player, index) => (
          <Substitute key={index} player={player} away={away} openPlayer={openPlayer.bind(this, player)} />
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

export default connect(mapStateToProps)(Substitutes);

const styles = StyleSheet.create({
  container: {
    color: '#000',
    fontSize: 12,
    textAlign: 'left',
    margin: 10,
  }
})
