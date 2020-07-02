import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Country from './Country/Country';
import SearchCountry from './SearchCountry/SearchCountry';
import Title from './Title/Title';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import { fetchAvailibleCountries } from '../../FakeData/FakeData';

const Countries = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const searchCountry = useState('');

  useEffect(() => {
    fetchAvailibleCountries()
      .then(response => response.api.results.countries)
      .then(countries => setCountries(countries))
      .catch(error => console.log(error))
  }, [])

  const openLeagues = useCallback((country) => {
    navigation.navigate('Leagues', { ...country });
  }, [])

  if (countries.length === 0) return <ModalSpinner />

  const filterCountries = () => {
    if (!searchCountry) return countries;
    return countries.filter(item => item.country.includes(searchCountry[0]))
  }

  return (
    <View style={styles.container}>
      <Title />
      <SearchCountry searchCountry={searchCountry} />
      <View style={styles.countriesContainer}>
        <FlatList
          data={filterCountries()}
          renderItem={({ item }) => <Country flag={item.flag} onPress={openLeagues.bind(this, item)} />}
          keyExtractor={(item, key) => key.toString()}
          numColumns={3}
          horizontal={false}
        />
      </View>
    </View>
  )
}

export default Countries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countriesContainer: {
    margin: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    elevation: 2,
    backgroundColor: '#fff',
  }
})
