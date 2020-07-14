import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StoredItem from './StoredItem/StoredItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.storedItems}>
        <StoredItem />
        <StoredItem />
      </View>

      <View style={styles.title}>
        <Text style={styles.titlePartOne}>Score</Text>
        <Text style={styles.titlePartTwo}>Mark</Text>
      </View>

      <View style={styles.searchContainer}>
        <Icon name={'search'} size={30} color={'#fff'} />
      </View>
    </View>
  )
}

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  storedItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePartOne: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'OpenSans-Regular',
  },
  titlePartTwo: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
  },
  searchContainer: {
    width: 90,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})
