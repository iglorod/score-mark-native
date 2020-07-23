import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import BriefStats from './BriefStats/BriefStats';

const ClubInfo = ({ club }) => {
  if (!club) return <ModalSpinner />;

  return (
    <View style={{ ...styles.clubInfo, backgroundColor: '#F96F5D' }}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={{ uri: club.logo }} />
      </View>

      <Text style={styles.teamName}>{club.name}</Text>

      <View style={styles.stadium}>
        <View>
          <Image source={require('../../assets/images/stadium.png')} style={styles.stadiumIcon} />
        </View>
        <Text style={styles.stadiumName}>{club.venue_name}</Text>
      </View>

      <View style={styles.address}>
        <Icon style={styles.enviromentIcon} name={'room'} size={25} color={'#fff'} />
        <Text style={styles.stadiumAddress}>{club.venue_city}, {club.venue_address}</Text>
      </View>

      <BriefStats />
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    club: state.club.club,
  }
}

export default connect(mapStateToProps)(ClubInfo);

const styles = StyleSheet.create({
  clubInfo: {
    alignItems: 'center',
    padding: 20,
    marginTop: 70,
    marginBottom: 25,
    marginHorizontal: 10,
    minWidth: 235,
    borderRadius: 5,
  },
  logoContainer: {
    height: 120,
    width: 120,
    padding: 10,
    borderRadius: 150,
    backgroundColor: '#fff',
    marginTop: -70,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    elevation: 2,
  },
  image: {
    height: 100,
    width: 100,
  },
  teamName: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  stadiumIcon: {
    height: 20,
    width: 30,
    marginRight: 5,
  },
  stadium: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 12,
    marginVertical: 5,
  },
  stadiumName: {
    color: '#fff',
  },
  address: {
    fontSize: 12,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  stadiumAddress: {
    color: '#fff',
  },
  enviromentIcon: {
    marginRight: 5,
  }
})
