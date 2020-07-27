import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FetchingSpinner from '../../../UI/FetchingSpinner/FetchingSpinner';
import { fetchTeam } from '../../../../FakeData/FakeData';
import { StyleSheet } from 'react-native';

const TransferClubs = ({ from, to }) => {
  const [fromTeam, setFromTeam] = useState(null);
  const [toTeam, setToTeam] = useState(null);

  useEffect(() => {
    Promise.all([
      fetchTeam(from.team_id),
      fetchTeam(to.team_id)
    ])
      .then(([fromResponse, toResponse]) => {
        setFromTeam(fromResponse.api.results.teams[0]);
        setToTeam(toResponse.api.results.teams[0]);
      })
  }, [])

  if (!fromTeam || !toTeam) return <FetchingSpinner color={'#000'} size={20} />;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: fromTeam.logo }} />
      <Icon style={styles.icon} name={'arrow-right-bold'} size={15} color={'#333'} />
      <Image style={styles.image} source={{ uri: toTeam.logo }} />
    </View>
  )
}

export default TransferClubs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: 10,
  },
  image: {
    height: 25,
    width: 25,
  }
})
