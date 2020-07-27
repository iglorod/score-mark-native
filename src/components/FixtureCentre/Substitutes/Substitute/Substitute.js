import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Subtitute = ({ player, away, openPlayer }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={openPlayer}>
      <View style={away ? styles.reverseContainer : styles.container}>
        <View style={[styles.avatar, { backgroundColor: away ? colors.secondaryBackground : colors.thirdBackground }]}>
          <Text style={styles.playerPosition}>{player.pos}</Text>
        </View>

        <View style={styles.player}>
          <Text style={styles.playerNumber}>{player.number}{'.'}</Text>
          <Text style={styles.playerName}>
            {player.player}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(Subtitute);

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
    color: '#fff',
  },
  playerNumber: {
    color: '#fff',
    paddingHorizontal: 5,
  },
  avatar: {
    fontSize: 14,
    marginTop: 10,
  },
})
