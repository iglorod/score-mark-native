import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme, useNavigation } from '@react-navigation/native';

const SelectedPlayer = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const player = props.away ? props.awayPlayer : props.homePlayer;

  const openPlayer = useCallback((playerId) => {
    navigation.navigate('Player', { id: playerId });
  }, [])

  if (!player.player_id) return null;

  return (
    <View style={styles.container}>
      <View style={styles.identData} onPress={openPlayer.bind(this, player.player_id)}>
        <Icon name={'face'} size={30} color={'#fff'} />

        <View>
          <Text style={styles.playerName}>{player.player_name}</Text>
          <Text style={{ ...styles.playerPosition, color: colors.thirdBackground }}>{player.position}</Text>
        </View>
      </View>
      <View style={styles.birthPlaceContainer}>
        <Icon name={'room'} size={20} color={colors.thirdBackground} />
        <Text style={[styles.playerBirthPlace, { color: colors.thirdBackground }]}>{player.birth_place}, {player.birth_country}</Text>
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    homePlayer: state.fxt.homePlayer,
    awayPlayer: state.fxt.awayPlayer,
  }
}

export default connect(mapStateToProps)(SelectedPlayer);

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  playerName: {
    color: '#fff',
    fontSize: 16,
  },
  playerPosition: {
    fontSize: 12,
  },
  playerBirthPlace: {
    marginTop: 10,
  },
  identData: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  birthPlaceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  }
})
