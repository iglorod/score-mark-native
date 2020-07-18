import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';

import Avatar from '../UI/Avatar/Avatar';
import { mostPopularLeagues } from '../../utility/compilation';

const PopularLeagues = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container} horizontal>
      {
        mostPopularLeagues().map((league, index) => (
          <Avatar
            key={index}
            size={70}
            selected={props.selectedLeague.league_id === league.league_id}
            onPress={props.setSelectedLeague.bind(this, league)}
          >
            <Image style={styles.image} source={{ uri: league.logo }} />
          </Avatar>
        ))
      }
    </ScrollView>
  )
}

export default PopularLeagues;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    height: '90%',
    width: '60%',
  }
})
