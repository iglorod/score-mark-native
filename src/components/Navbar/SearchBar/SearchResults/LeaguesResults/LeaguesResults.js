import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { debounce } from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { LeagesByCountry } from '../../../../../FakeData/FakeData';

const LeaguesResults = ({ searchText }) => {
  const [leagues, setLeagues] = useState([]);
  const [isDeployed, setIsDeployed] = useState(false);

  const debounceSearch = useRef(debounce((word) => {
    LeagesByCountry(word)
      .then(response => response.api.results.leagues)
      .then(leagues => setLeagues(leagues))
      .catch(error => console.log(error.message))
  }, 800)).current;

  useEffect(() => {
    if (searchText.length < 3) {
      setLeagues([]);
      debounceSearch.cancel();
      return;
    }

    debounceSearch(searchText);
  }, [searchText])

  const playersListStyles = {
    height: 100,
    overflow: 'hidden',
  }

  let deployButton = null;
  if (!isDeployed && leagues.length > 0) {
    deployButton = (
      <TouchableOpacity onPress={setIsDeployed.bind(this, true)}>
        <View style={styles.deployButton}>
          <Icon name={'keyboard-arrow-down'} size={25} color={'#fff'} />
        </View>
      </TouchableOpacity>
    )
  }

  let header = null;
  if (isDeployed && leagues.length > 0) {
    header = (
      <View style={styles.header}>
        <Text style={styles.title}>Leagues</Text>
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
      <View style={!isDeployed && leagues.length > 0 ? playersListStyles : null}>
        {
          leagues.map((league, index) => (
            <View style={styles.leagueItem} key={index}>
              <View style={styles.logoWrapper}>
                <Image style={styles.image} source={{ uri: league.logo }} />
              </View>

              <View>
                <Text style={styles.leagueName}>{league.name}</Text>
                <Text style={styles.leagueDescription}>{league.country}</Text>
              </View>
            </View>
          ))
        }
      </View>

      {deployButton}
    </View>
  )
}

export default LeaguesResults;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans-Regular',
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#7CC47F',
  },
  leagueName: {
    color: '#fff',
    fontSize: 20,
  },
  leagueDescription: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 5,
  },
  logoWrapper: {
    padding: 5,
    marginRight: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  image: {
    height: 50,
    width: 50,
  },
  leagueItem: {
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
