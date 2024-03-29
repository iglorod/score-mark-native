import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import LinksToScreens from '../LinksToScreens/LinksToScreens';
import BookmakerOdds from './BookmakerOdds/BookmakerOdds';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import { fetchFixtureOdds } from '../../FakeData/FakeData';

const FixtureOdds = () => {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    fetchFixtureOdds()
      .then(response => response.api.results.odds[0])
      .then(odds => odds.bookmakers)
      .then(bookmakersOdds => setOdds(bookmakersOdds))
      .catch(error => console.log(error))
  }, [])

  if (odds.length === 0) return <ModalSpinner />;

  return (
    <View>
      <LinksToScreens
        values={[
          {
            name: 'Statistics',
            path: 'Stats',
          },
          {
            name: 'Centre',
            path: 'Centre',
          },
          {
            name: 'Events',
            path: 'Events',
          },
        ]} />

      <FlatList
        data={odds}
        renderItem={({ item }) => (<BookmakerOdds odd={item} />)}
        keyExtractor={(item, key) => key} />
    </View>
  )
}

export default FixtureOdds;
