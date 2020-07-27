import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ClubsResults from './ClubsResults/ClubsResults';
import LeaguesResults from './LeaguesResults/LeaguesResults';
import PlayersResults from './PlayersResults/PlayersResults';

const SearchResults = ({ searchText }) => {
  const [deployedId, setDeployedId] = useState(null);

  const close = useCallback(() => {
    setDeployedId(null);
  }, [])

  return (
    <ScrollView>
      <View style={[{ flex: 1 }]}>
        <PlayersResults
          searchText={searchText}
          deployed={deployedId === 0}
          deploy={setDeployedId.bind(this, 0)}
          close={close} />
        <ClubsResults
          searchText={searchText}
          deployed={deployedId === 1}
          deploy={setDeployedId.bind(this, 1)}
          close={close} />
        <LeaguesResults
          searchText={searchText}
          deployed={deployedId === 2}
          deploy={setDeployedId.bind(this, 2)}
          close={close} />
      </View>
    </ScrollView>
  )
}

export default SearchResults;
