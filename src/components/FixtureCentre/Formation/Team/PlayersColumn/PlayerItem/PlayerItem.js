import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const PlayerItem = (props) => {
  const { player, away, selectedPlayerId } = props;
  const { colors } = useTheme();

  let avatarStyle = { ...styles.playerAvatar };
  if (away) {
    avatarStyle = {
      ...avatarStyle,
      backgroundColor: colors.secondaryBackground,
    };
  } else {
    avatarStyle = {
      ...avatarStyle,
      backgroundColor: colors.thirdBackground,
    };
  }

  if (selectedPlayerId >= 0 && selectedPlayerId !== player.player_id) {
    avatarStyle = {
      ...avatarStyle,
      ...styles.transparentPlayer,
    };
  }

  return (
    <View style={styles.container}>
      <Text style={[avatarStyle, { color: '#fff' }]} onPress={props.selectPlayer}>{player.playerStats.rating}</Text>
      <View style={styles.playerData}>
        <Text style={styles.playerNumber} numberOfLines={2}>{player.number}. {player.player}</Text>
      </View>
    </View>
  )
}

export default React.memo(PlayerItem);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  playerAvatar: {
    fontSize: 12,
    height: 35,
    width: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 150,
  },
  playerData: {
    color: '#fff',
    fontSize: 10,
    width: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  playerNumber: {
    color: '#fff',
    width: '100%',
    paddingHorizontal: 5,
  },
  transparentPlayer: {
    opacity: 0.3,
  }
})
