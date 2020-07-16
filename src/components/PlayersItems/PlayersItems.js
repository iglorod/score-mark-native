/* eslint-disable react/display-name */
import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';

import Navbar from '../Navbar/Navbar';
import FetchingSpinner from '../UI/FetchingSpinner/FetchingSpinner';
import SearchPlayer from './SearchPlayer/SearchPlayer';
import PlayerItem from './PlayerItem/PlayerItem';
import { fetchPlayers } from '../../FakeData/FakeData';

const PlayersItems = () => {
  const [searchText, setSearchText] = useState('');
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  const { colors } = useTheme();
  const navigation = useNavigation();
  navigation.setOptions({ header: () => <Navbar backgroundColor={colors.secondaryBackground} /> })

  const debounceSearch = useRef(debounce((word) => {
    setLoading(true);
    fetchPlayers(word)
      .then(response => response.api.results.players)
      .then(players => setPlayers(players))
      .then(() => setLoading(false))
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


  let content = <FetchingSpinner color={'#fff'} />
  if (!loading) {
    content = (
      players.map((player, index) => (
        <PlayerItem key={index} player={player} />
      ))
    )
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.secondaryBackground }]}>
      <ScrollView>
        <SearchPlayer searchText={searchText} setSearchText={setSearchText} />

        {content}
      </ScrollView>
    </View>
  )
}

export default PlayersItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  }
})
