import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import BriefStats from './BriefStats/BriefStats';

const ClubInfo = ({ club }) => {
  const { colors } = useTheme();

  if (!club) return <ModalSpinner />;

  return (
    <View style={styles.clubInfo}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: club.logo }} height={100} width={100} />
      </View>

      <Text style={styles.teamName}>{club.name}</Text>

      <View style={styles.stadium}>
        <View>
          <Image source={require('../../assets/images/stadium.png')} style={styles.stadiumIcon} />
        </View>
        <Text>{club.venue_name}</Text>
      </View>

      <View style={styles.address}>
        <Icon style={styles.enviromentIcon} name={'room'} size={20} color={colors.primary} />
        <Text>{club.venue_city}, {club.venue_address}</Text>
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
    minWidth: 235,
    backgroundColor: '#f57922',
    borderRadius: 5,
  },
  logoContainer: {
    padding: 10,
    borderRadius: 150,
    backgroundColor: '#fff',
    marginTop: -70,
    zIndex: 1,
  },
  teamName: {
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  stadiumIcon: {
    height: 20,
    marginRight: 5,
  },
  stadium: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 12,
    marginVertical: 5,
  },
  address: {
    fontSize: 12,
    flexDirection: 'row',
  },
  enviromentIcon: {
    marginRight: 5,
  }
})
