import React from 'react';
import { View } from 'react-native';

import OpenSkeleton from '../UI/OpenSkeleton/OpenSkeleton';

const Main = ({ navigation }) => {
  return (
    <View>
      <OpenSkeleton
        text={'News Feed'}
        image={require('../../assets/images/openNews.png')}
        onPress={navigation.navigate.bind(this, 'News')} />
      <OpenSkeleton
        text={'Players'}
        image={require('../../assets/images/openPlayers.png')}
        onPress={navigation.navigate.bind(this, 'Players')} />

    </View>
  )
}

export default Main;
