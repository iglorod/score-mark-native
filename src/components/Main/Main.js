import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import OpenSkeleton from '../UI/OpenSkeleton/OpenSkeleton';
import OpenMatches from '../OpenComponents/OpenMatches/OpenMatches';

const Main = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <OpenSkeleton
        title={'News Feed'}
        image={require('../../assets/images/openNews.png')}
        onPress={navigation.navigate.bind(this, 'News')} />
      <OpenSkeleton
        title={'Players'}
        image={require('../../assets/images/openPlayers.png')}
        onPress={navigation.navigate.bind(this, 'Players')} />
      <OpenMatches />
    </ScrollView>
  )
}

export default Main;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  }
})
