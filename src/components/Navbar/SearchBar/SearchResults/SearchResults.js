import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ClubsResults from './ClubsResults/ClubsResults';
import LeaguesResults from './LeaguesResults/LeaguesResults';
import PlayersResults from './PlayersResults/PlayersResults';

const SearchResults = ({ searchText }) => {
  return (
    <ScrollView>
      <View style={[{ flex: 1 }]}>
        <PlayersResults searchText={searchText} />
        <ClubsResults searchText={searchText} />
        <LeaguesResults searchText={searchText} />
      </View>
    </ScrollView>
  )
}

export default SearchResults;
