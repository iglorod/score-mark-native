import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { debounce } from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { fetchPlayers } from '../../../../../FakeData/FakeData';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PlayersResults = ({ searchText }) => {
  const [players, setPlayers] = useState([]);
  const [isDeployed, setIsDeployed] = useState(false);

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

  const playersListStyles = {
    height: 100,
    overflow: 'hidden',
  }

  let deployButton = null;
  if (!isDeployed && players.length > 0) {
    deployButton = (
      <TouchableOpacity onPress={setIsDeployed.bind(this, true)}>
        <View style={styles.deployButton}>
          <Icon name={'keyboard-arrow-down'} size={25} color={'#fff'} />
        </View>
      </TouchableOpacity>
    )
  }

  let header = null;
  if (isDeployed && players.length > 0) {
    header = (
      <View style={styles.header}>
        <Text style={styles.title}>Players</Text>
        <TouchableOpacity onPress={setIsDeployed.bind(this, false)}>
          <View style={styles.deployButton}>
            <Icon name={'keyboard-arrow-up'} size={25} color={'#fff'} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {header}
      <View style={!isDeployed && players.length > 0 ? playersListStyles : null}>
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

      {deployButton}
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
    paddingTop: 25,
  },
  playerItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  deployButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'OpenSans-Regular',
  }
})
