import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import ClubInfo from '../ClubInfo/ClubInfo';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import Player from './Player/Player';
import { fetchClubSquadActionCreator } from '../../store/club/actions';

const ClubSquad = ({ players, fetchClubSquad }) => {
  const navigation = useNavigation();

  useEffect(() => {
    fetchClubSquad();
  }, [fetchClubSquad])

  const openPlayer = useCallback((playerId) => {
    navigation.navigate('Player', {id: playerId})
  }, [])

  if (players.length === 0) return <ModalSpinner />;

  return (
    <View style={styles.container}>
      <ClubInfo />

      {
        Object.values(players).map((player, index) => (
          <Player key={index} player={player} openPlayer={openPlayer.bind(this, player.player_id)} />
        ))
      }
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    players: state.club.players,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClubSquad: () => { dispatch(fetchClubSquadActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubSquad);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
