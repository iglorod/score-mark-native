import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClubName = ({ club }) => {
  const navigation = useNavigation();

  console.log(club)

  const openClub = (club) => {
    navigation.navigate('ClubScreens', club)
  }

  return (
    <TouchableOpacity onPress={openClub.bind(this, club)}>
      <Text style={styles.clubName}>{club.team_name}</Text>
    </TouchableOpacity>
  )
}

export default ClubName;

const styles = StyleSheet.create({
  clubName: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
  }
})
