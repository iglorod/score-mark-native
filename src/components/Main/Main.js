import React, { useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import OpenSkeleton from '../UI/OpenSkeleton/OpenSkeleton';
import OpenMatches from '../OpenComponents/OpenMatches/OpenMatches';
import OpenLeague from '../OpenComponents/OpenLeague/OpenLeague';
import OpenClub from '../OpenComponents/OpenClub/OpenClub';

const Main = ({ navigation }) => {
  const viewRef = useRef();

  const scrollToBottom = () => {
    viewRef.current.scrollToEnd({animated: true})
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      ref={viewRef}
    >
      <OpenSkeleton
        title={'News Feed'}
        image={require('../../assets/images/openNews.png')}
        onPress={navigation.navigate.bind(this, 'News')} />
      <OpenSkeleton
        title={'Players'}
        image={require('../../assets/images/openPlayers.png')}
        onPress={navigation.navigate.bind(this, 'Players')} />

      <OpenMatches />
      <OpenClub />
      <OpenLeague scrollToBottom={scrollToBottom} />
    </ScrollView>
  )
}

export default Main;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  }
})
