import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { debounce } from 'lodash';

import { fetchPlayers } from '../../../../../FakeData/FakeData';

const PlayersResults = ({ searchText }) => {
  const [players, setPlayers] = useState([]);

  const debounceSearch = useRef(debounce((word) => {
    fetchPlayers(word)
      .then(response => response.api.results.players)
      .then(players => setPlayers(players))
      .catch(error => console.log(error.message))
  }, 800)).current;


  useEffect(() => {
    if (searchText.length < 3) {
      setPlayers([]);
      debounceSearch.cancel();
      return;
    }

    debounceSearch(searchText);
  }, [searchText])

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <View style={styles.container}>
      {
        players.map((player, index) => (
          <View style={styles.playerItem} key={index}>
            <ImageBackground
              source={require('../../../../../assets/images/playersPhosos.jpg')}
              imageStyle={{
                resizeMode: 'cover',
                top: getRandomInt(6) * -90,
                height: 525,
              }}
              style={{
                width: 65,
                height: 80,
                overflow: 'hidden',
                marginRight: 10,
                borderRadius: 5,
              }} />

            <View>
              <Text style={styles.playerName}>{player.player_name}</Text>
              <Text style={styles.playerDescription}>{player.position}, {player.nationality}</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default PlayersResults;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans-Regular',
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#4BB6A9',
  },
  playerName: {
    color: '#fff',
    fontSize: 20,
  },
  playerDescription: {
    color: '#fff',
    fontSize: 16,
  },
  playerItem: {
    flexDirection: 'row',
    marginVertical: 10,
  }
})
