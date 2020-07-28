/* eslint-disable react/display-name */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';

import ScrollToTopView from '../UI/ScrollToTopView/ScrollToTopView';
import Navbar from '../Navbar/Navbar';
import FetchingSpinner from '../UI/FetchingSpinner/FetchingSpinner';
import SearchPlayer from './SearchPlayer/SearchPlayer';
import PlayerItem from './PlayerItem/PlayerItem';
import NotFound from '../NotFound/NotFound';
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

  const openPlayer = useCallback(player => {
    navigation.navigate('PlayerScreens', player);
  }, [])

  let content = <FetchingSpinner color={'#fff'} />
  if (!loading && players.length === 0) {
    content = <NotFound text={'Enter the correct player name'} />
  }
  else if (!loading) {
    content = (
      players.map((player, index) => (
        <PlayerItem key={index} player={player} onPress={openPlayer.bind(this, player)} />
      ))
    )
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.secondaryBackground }]}>
      <ScrollToTopView>
        <SearchPlayer searchText={searchText} setSearchText={setSearchText} />

        {content}
      </ScrollToTopView>
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
