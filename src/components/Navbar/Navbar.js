import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import StoredItem from './StoredItem/StoredItem';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SearchBar from './SearchBar/SearchBar';
import Dropdown from './Dropdown/Dropdown';
import { setLastLeagueActionCreator, setLastClubActionCreator } from '../../store/navbar/actions';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const { lastLeague, lastClub } = props;
  const appear = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    appearAnimation();
  }, [isOpen])

  const appearAnimation = () => {
    Animated.timing(
      appear,
      {
        toValue: isOpen ? 0 : 1,
        duration: 700,
        useNativeDriver: false,
        easing: Easing.ease
      }
    ).start()
  }

  useEffect(() => {
    AsyncStorage.getItem('LAST_LEAGUE')
      .then(league => props.setLastLeague(JSON.parse(league)))

    AsyncStorage.getItem('LAST_CLUB')
      .then(club => props.setLastClub(JSON.parse(club)))

  }, [props.setLastLeague, props.setLastClub])

  return (
    <View style={[styles.container, { backgroundColor: props.backgroundColor || 'transparent' }]}>
      <Animated.View style={[styles.storedItems, { opacity: appear }]}>
        <StoredItem
          logo={lastLeague ? lastLeague.logo : null}
          selected={openDropdownId === 0}
          onPress={lastLeague ? setOpenDropdownId.bind(this, openDropdownId === 0 ? null : 0) : null} />
        <StoredItem
          logo={lastClub ? lastClub.logo : null}
          selected={openDropdownId === 1}
          onPress={lastClub ? setOpenDropdownId.bind(this, openDropdownId === 1 ? null : 1) : null} />
      </Animated.View>

      <Dropdown
        open={openDropdownId !== null && !isOpen}
        selectedItemData={openDropdownId === 0 ? lastLeague : lastClub}
        openPage={openDropdownId === 0 ? 'LeagueScreens' : 'Club'}
        openFixtures={openDropdownId === 0 ? 'LeagueFixtures' : 'ClubFixtures'}
        closeDropdown={setOpenDropdownId.bind(this, null)} />

      <Animated.View style={[styles.title, { opacity: appear }]}>
        <Text style={styles.titlePartOne}>Score</Text>
        <Text style={styles.titlePartTwo}>Mark</Text>
      </Animated.View>


      <Animated.View style={[styles.searchContainer, { opacity: appear }]}>
        <TouchableOpacity onPress={setIsOpen.bind(this, true)}>
          <Icon name={'search'} size={30} color={'#fff'} />
        </TouchableOpacity>
      </Animated.View>

      <SearchBar isOpen={isOpen} close={setIsOpen.bind(this, false)} />
    </View >
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
