import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TimeStats from './TimeStats/TimeStats';
import GoalsStats from './GoalsStats/GoalsStats';
import ShotsStats from './ShotsStats/ShotsStats';

const Scorers = (props) => {
  const { player, backgroundColor } = props;

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[styles.playerItem, { backgroundColor }]}>
        <View style={styles.content}>
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
              borderRadius: 5,
            }} />
          <View style={styles.dataContainer}>
            <Text style={styles.playerName} numberOfLines={1}>{player.firstname} {player.lastname}</Text>
            <View>
              <Text style={styles.playerPosition}>
                <Icon name={'transition-masked'} color={'#fff'} size={20} />
                {player.position}
              </Text>
              <View style={styles.bottomContainer}>
                <Text style={styles.whiteTint}>{player.nationality}</Text>
                <Text style={styles.whiteTint}>b.n. {player.player_name}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.rank}>{`#${props.rank}`}</Text>
        </View>
        <View style={styles.playerStats}>
          <TimeStats player={player} />
          <GoalsStats player={player} />
          <ShotsStats player={player} progressColor={props.progressColor} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(Scorers);

const styles = StyleSheet.create({
  playerItem: {
    padding: 15,
    marginBottom: 25,
    borderRadius: 5,
  },
  dataContainer: {
    flex: 1,
    fontFamily: 'OpenSans-Regular',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  playerName: {
    color: '#fff',
    fontSize: 22,
    maxWidth: '100%',
  },
  playerPosition: {
    color: '#fff',
    fontSize: 16,
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
  },
  playerStats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: '#f5f5f5',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  whiteTint: {
    color: '#fff',
  },
  rank: {
    color: '#fff',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    paddingLeft: 25,
  }
})
