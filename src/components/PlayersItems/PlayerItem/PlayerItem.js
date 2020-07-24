import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Card from '../../UI/Card/Card';

const PlayerItem = ({ player, onPress }) => {
  const { colors } = useTheme();

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={{ marginVertical: 10, }}>
        <ImageBackground
          source={require('../../../assets/images/playersPhosos.jpg')}
          imageStyle={{
            resizeMode: 'cover',
            top: getRandomInt(6) * -90,
            height: 525,
          }}
          style={{
            width: 65,
            height: 80,
            overflow: 'hidden',
          }} />

        <View style={styles.dataContainer}>
          <Text style={styles.playerName} numberOfLines={1}>{player.player_name}</Text>
          <View>
            <Text style={[styles.playerPosition, { color: colors.secondaryText }]}>{player.position}</Text>
            <View style={styles.bottomContainer}>
              <Text>{player.birth_place}, {player.birth_country}</Text>
              <Text>{player.age} y.o.</Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export default PlayerItem;

const styles = StyleSheet.create({
  dataContainer: {
    flex: 1,
    fontFamily: 'OpenSans-Regular',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  playerName: {
    fontSize: 20,
    maxWidth: '100%',
  },
  playerPosition: {
    color: '#fff',
    fontSize: 18,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  birth_place: {
    fontSize: 14,
  },
  age: {
    fontSize: 14,
  }
})
