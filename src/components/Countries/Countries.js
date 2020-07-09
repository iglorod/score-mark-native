import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Country from './Country/Country';
import SearchCountry from './SearchCountry/SearchCountry';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import IconBanner from '../UI/IconBanner/IconBanner';
import { fetchAvailibleCountries } from '../../FakeData/FakeData';

const Countries = ({ selectedCountry, onChoose }) => {
  const [countries, setCountries] = useState([]);
  const searchCountry = useState('');

  useEffect(() => {
    fetchAvailibleCountries()
      .then(response => response.api.results.countries)
      .then(countries => setCountries(countries))
      .catch(error => console.log(error))
  }, [])

  if (countries.length === 0) return <ModalSpinner />;

  const filterCountries = () => {
    return countries.filter(item => item.country.toLowerCase().includes(searchCountry[0].toLowerCase()))
  }

  let content = <IconBanner iconName={'location-searching'} text={'Find league by country'} />;
  if (searchCountry[0].length > 1) {
    content = (
      <View style={styles.countriesContainer}>
        <FlatList
          data={filterCountries()}
          renderItem={({ item }) => (
            <Country
              flag={item.flag}
              selected={selectedCountry ? selectedCountry.code === item.code : false}
              onPress={onChoose.bind(this, item)} />
          )}
          keyExtractor={(item, key) => key}
          numColumns={3}
          horizontal={false}
          columnWrapperStyle={styles.listStyle}
        />
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.header}>Choose a country</Text>
      
      <SearchCountry searchCountry={searchCountry} />

      {content}
    </View>
  )
}

export default Countries;

const styles = StyleSheet.create({
  countriesContainer: {
    margin: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    elevation: 2,
    backgroundColor: '#fff',
  },
  listStyle: {
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    marginTop: 25,
    paddingBottom: 10,
  }
})
