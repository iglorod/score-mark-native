import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

const LeagueItem = ({ league, onPress }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image style={styles.image} source={{ uri: league.logo }} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.leagueName}>{league.name}</Text>
        <Text style={styles.leagueRange}>{league.season_start} - {league.season_end}</Text>
      </View>

      <View style={styles.iconContainer}>
        <Icon name={'arrow-forward'} size={30} color={colors.primary} />
      </View>
    </TouchableOpacity>
  )
}

export default LeagueItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 100,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    elevation: 2,
    backgroundColor: '#fff',
  },
  image: {
    height: 70,
    width: 60,
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  leagueName: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    textTransform: 'uppercase',
  },
  leagueRange: {
    fontFamily: 'OpenSans-Regular',
    textAlign: 'justify',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
  }
})
