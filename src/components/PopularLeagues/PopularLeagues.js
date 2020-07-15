import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Avatar from '../UI/Avatar/Avatar';
import { mostPopularLeagues } from '../../utility/compilation';

const PopularLeagues = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal>
      {
        mostPopularLeagues().map((league, index) => (
          <TouchableOpacity key={index} onPress={navigation.navigate.bind(this, 'League', league)}>
            <Avatar size={70}>
              <Image style={styles.image} source={{ uri: league.logo }} />
            </Avatar>
          </TouchableOpacity>
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
