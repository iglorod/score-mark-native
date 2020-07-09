import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Subtitute = ({ player, away, openPlayer }) => {
  return (
    <View style={away ? styles.reverseContainer : styles.container}>
      <View style={away ? styles.awayAvatar : styles.homeAwatar}>
        <Text style={styles.playerPosition}>{player.pos}</Text>
      </View>

      <View style={styles.player}>
        <Text style={styles.playerNumber}>{player.number}{'.'}</Text>
        <Text
          style={styles.playerName}
          onPress={openPlayer.bind(this, player.player_id)}
        >
          {player.player}
        </Text>
      </View>
    </View>
  )
}

export default Subtitute;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  reverseContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  playerPosition: {
    color: '#fff',
    width: 35,
    height: 35,
    borderRadius: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  player: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  playerName: {
    color: '#000',
  },
  playerNumber: {
    color: 'rgba(0, 0, 0, 0.65)',
    paddingHorizontal: 5,
  },
  awayAvatar: {
    fontSize: 14,
    marginTop: 10,
    backgroundColor: '#EB5B14',
  },
  homeAwatar: {
    fontSize: 14,
    marginTop: 10,
    backgroundColor: '#008BE0',
  },
})
