import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StoredItem from './StoredItem/StoredItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import Dropdown from './Dropdown/Dropdown';

import { setLastLeagueActionCreator, setLastClubActionCreator } from '../../store/navbar/actions';

const Navbar = (props) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const { lastLeague, lastClub } = props;

  useEffect(() => {
    AsyncStorage.getItem('LAST_LEAGUE')
      .then(league => props.setLastLeague(JSON.parse(league)))

    AsyncStorage.getItem('LAST_CLUB')
      .then(club => props.setLastClub(JSON.parse(club)))

  }, [props.setLastLeague, props.setLastClub])

  return (
    <View style={[styles.container, { backgroundColor: props.backgroundColor || 'transparent' }]}>
      <View style={styles.storedItems}>
        <StoredItem
          logo={lastLeague ? lastLeague.logo : null}
          selected={openDropdownId === 0}
          onPress={lastLeague ? setOpenDropdownId.bind(this, openDropdownId === 0 ? null : 0) : null} />
        <StoredItem
          logo={lastClub ? lastClub.logo : null}
          selected={openDropdownId === 1}
          onPress={lastClub ? setOpenDropdownId.bind(this, openDropdownId === 1 ? null : 1) : null} />
      </View>

      <Dropdown
        open={openDropdownId !== null}
        selectedItemData={openDropdownId === 0 ? lastLeague : lastClub}
        openPage={openDropdownId === 0 ? 'LeagueScreens' : 'Club'}
        openFixtures={openDropdownId === 0 ? 'LeagueFixtures' : 'ClubFixtures'}
        closeDropdown={setOpenDropdownId.bind(this, null)} />

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

const mapStateToProps = state => {
  return {
    lastLeague: state.nvb.lastLeague,
    lastClub: state.nvb.lastClub,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLastLeague: (league) => { dispatch(setLastLeagueActionCreator(league)) },
    setLastClub: (club) => { dispatch(setLastClubActionCreator(club)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
    fontFamily: 'OpenSans-Bold',
  },
  searchContainer: {
    width: 90,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})
