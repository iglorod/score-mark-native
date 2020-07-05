import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TimeStats from './TimeStats/TimeStats';
import GoalsStats from './GoalsStats/GoalsStats';
import ShotsStats from './ShotsStats/ShotsStats';
import { topScorers } from '../../FakeData/FakeData';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';

const TopScorers = ({ route }) => {
  const [playerData, setPlayerData] = useState([]);
  const [loading, setLoading] = useState(true);   //using loading var couse top scorers data may be empty

  useEffect(() => {
    topScorers(route.params.id)
      .then(response => response.api.results.topscorers)
      .then(scorers => setPlayerData(scorers))
      .then(() => setLoading(false))
      .catch(error => console.log(error))
  }, [])

  if (loading) return <ModalSpinner />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Icon name={'orbit'} size={20} color={'#000'} /> {'League Top Scorers'}
      </Text>

      <FlatList
        data={playerData}
        renderItem={({ item: player }) => (
          <View style={styles.playerItem}>
            <View>
              <Text style={styles.playerName}>{player.firstname} {player.lastname}</Text>
            </View>
            <View style={styles.playerStats}>
              <TimeStats player={player} />
              <GoalsStats player={player} />
              <ShotsStats player={player} />
            </View>
          </View>
        )}
        keyExtractor={(item, key) => key} />
    </View>
  )
}

export default TopScorers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  playerItem: {
    display: 'flex',
    paddingBottom: 15,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  playerName: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'left',
    paddingBottom: 10,
  },
  playerStats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    marginBottom: 20,
  }
})
