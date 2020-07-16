import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchPlayer = ({ searchText, setSearchText }) => {
  return (
    <TextInput
      style={styles.input}
      value={searchText}
      onChangeText={setSearchText}
      placeholder={'Type player name here...'}
    />
  )
}

export default SearchPlayer;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  }
})
