import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import SearchResults from './SearchResults/SearchResults';
import { fetchAvailibleCountries } from '../../../../../FakeData/FakeData';

const SearchCountry = (props) => {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState(null);

  const { colors } = useTheme();

  useEffect(() => {
    fetchAvailibleCountries()
      .then(response => response.api.results.countries)
      .then(countries => setCountries(countries))
      .catch(error => console.log(error))
  }, [])

  return (
    <View style={styles.container}>
      <TextInput
        style={{ ...styles.input, backgroundColor: colors.background }}
        value={searchText}
        onChangeText={setSearchText}
        placeholder={'Type country name here...'}
        placeholderTextColor={'#fff'}
      />

      <SearchResults
        searchText={searchText}
        countries={countries}
        selectedCountry={props.selectedCountry}
        setSelectedCountry={props.setSelectedCountry} />
    </View>
  )
}

export default SearchCountry;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    height: 40,
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  }
})
