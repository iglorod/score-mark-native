import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import ClubInfo from '../ClubInfo/ClubInfo';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import Player from './Player/Player';

const ClubSquad = (props) => {
  const navigation = useNavigation();

  const openPlayer = useCallback((playerId) => {
    navigation.navigate('Player', { id: playerId })
  }, [])

  if (props.players.length === 0) return <ModalSpinner />;

  return (
    <View style={styles.container}>
      <ClubInfo />

      {
        Object.values(props.players).map((player, index) => (
          <Player
            key={index}
            index={index}
            player={player}
            openPlayer={openPlayer.bind(this, player.player_id)} />
        ))
      }
    </View>
  )
}

const mapStateToProps = state => {
  return {
    players: state.club.players,
  }
}

export default connect(mapStateToProps)(ClubSquad);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
