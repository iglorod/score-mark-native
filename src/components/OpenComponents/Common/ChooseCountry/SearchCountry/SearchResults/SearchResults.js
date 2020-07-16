import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

import EmptyAvatarList from '../../../../../EmptyAvatarList/EmptyAvatarList';
import Avatar from '../../../../../UI/Avatar/Avatar';

const SearchResults = (props) => {
  const { colors } = useTheme();

  let filteredCountries = null;
  if (props.searchText.length > 1) {
    filteredCountries = props.countries.filter(item => item.country.toLowerCase().includes(props.searchText.toLowerCase()));
  }

  let countriesList = <EmptyAvatarList count={3} />
  if (filteredCountries && filteredCountries.length === 0) {
    countriesList = <Text style={{ ...styles.warnText, color: colors.text }}>Country not found</Text>
  } else if (filteredCountries && filteredCountries.length > 0) {
    countriesList = (
      filteredCountries.map((country, index) => (
        <Avatar
          key={index}
          size={60}
          style={styles.avatar}
          selected={country.code === props.selectedCountry.code}
          onPress={props.setSelectedCountry.bind(this, country)}
        >
          <SvgUri height={60} width={90} uri={country.flag} />
        </Avatar>
      ))
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal>
      {countriesList}
    </ScrollView>
  )
}

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  warnText: {
    fontSize: 20,
    marginVertical: 5,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
  },
  avatar: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    elevation: 5,
  }
})
