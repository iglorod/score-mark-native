import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Scorers = ({ clubId, events }) => {
  const navigation = useNavigation();

  const scorers = events.reduce((scorers, event) => {
    if (event.team_id === clubId && event.type === 'Goal') {
      scorers.push(event);
    }

    return scorers;
  }, []);

  const openPlayer = (playerId) => {
    navigation.navigate('Player', { id: playerId });
  }

  return (
    <View style={styles.container}>
      {
        scorers.map((event, index) => (
          <View style={styles.scoredData} key={index}>
            <Text style={styles.minute}>{event.elapsed}{'\' '}</Text>
            <Text style={styles.scorer} onPress={openPlayer.bind(this, event.player_id)}>{event.player}</Text>
          </View>
        ))
      }
    </View>
  )
}

export default Scorers;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    borderTopColor: '#cecece',
    borderTopWidth: 1,
  },
  scoredData: {
    fontSize: 10,
    flexDirection: 'row',
  },
  minute: {
    color: '#fff',
  },
  scorer: {
    color: '#fff',
  },
})
