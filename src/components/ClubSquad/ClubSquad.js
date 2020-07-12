import React, { useEffect, useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import ClubInfo from '../ClubInfo/ClubInfo';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import Player from './Player/Player';
import { fetchClubSquadActionCreator } from '../../store/club/actions';

const ClubSquad = ({ players, fetchClub }) => {
  const navigation = useNavigation();

  useEffect(() => {
    fetchClub();
  }, [fetchClub])

  const openPlayer = useCallback((playerId) => {
    navigation.navigate('Player', {id: playerId})
  }, [])

  if (players.length === 0) return <ModalSpinner />;

  return (
    <ScrollView style={styles.container}>
      <ClubInfo />

      {
        Object.values(players).map((player, index) => (
          <Player key={index} index={index + 1} player={player} openPlayer={openPlayer.bind(this, player.player_id)} />
        ))
      }
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    players: state.club.players,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClub: () => { dispatch(fetchClubSquadActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubSquad);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
