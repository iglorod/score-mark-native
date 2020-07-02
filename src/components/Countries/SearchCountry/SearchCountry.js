import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const SearchCountry = ({ searchCountry }) => {
  const [searchText, setSearchText] = searchCountry;
  const [borderBottomWidth, setBorderBottomWidth] = useState(1);
  const { colors } = useTheme();

  const textInputStyles = { 
    ...styles.input, 
    borderBottomWidth,  
    borderBottomColor: colors.primary,
  }

  return (
    <TextInput
      style={textInputStyles}
      value={searchText}
      placeholder={'Type country name here...'}
      onChangeText={setSearchText}
      onFocus={setBorderBottomWidth.bind(this, 2)}
      onBlur={setBorderBottomWidth.bind(this, 1)}
    />
  )
}

export default SearchCountry;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 15,
  }
})
