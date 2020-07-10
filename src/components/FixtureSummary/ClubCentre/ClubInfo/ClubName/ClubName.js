import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClubName = ({ club }) => {
  const navigation = useNavigation();

  const openClub = (clubId) => {
    navigation.navigate('Club', { id: clubId })
  }

  return <Text style={styles.clubName} onPress={openClub.bind(this, club.team_id)}>{club.team_name}</Text>
}

export default ClubName;

const styles = StyleSheet.create({
  clubName: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
  }
})
