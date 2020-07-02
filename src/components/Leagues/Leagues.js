import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

import LeagueItem from './LeagueItem/LeagueItem';
import LinearGradientTitle from '../UI/LinearGradientTitle/LinearGradientTitle';
import { LeagesByCountry } from '../../FakeData/FakeData';
import { FlatList } from 'react-native-gesture-handler';

const Leagues = ({ navigation, route }) => {
  const [leagues, setLeagues] = useState([]);
  const { country, code, flag } = route.params;

  useEffect(() => {
    LeagesByCountry(code)
      .then(response => response.api.results.leagues)
      .then(leagues => setLeagues(leagues))
      .catch(error => console.log(error.message))
  }, [])

  navigation.setOptions({ title: `${country} Leagues` })

  const openLeague = (leagueId) => {
    navigation.navigate('League', { leagueId, })
  }

  return (
    <View>
      <LinearGradientTitle>
        <SvgUri height={70} width={120} uri={flag} />
        <Text style={styles.titleCountry}>{`${country} (${code})`}</Text>
        <Text style={styles.subTitleCountry}>Nulla porttitor massa id neque aliquam</Text>
      </LinearGradientTitle>

      <FlatList
        data={leagues}
        renderItem={({ item }) => <LeagueItem league={item} onPress={openLeague.bind(this, item.league_id)} />}
        keyExtractor={(item, key) => key} />
    </View>
  )
}

export default Leagues;

const styles = StyleSheet.create({
  titleCountry: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
    textTransform: 'uppercase',
    marginTop: 10,
  },
  subTitleCountry: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  }
})
