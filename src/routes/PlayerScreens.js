import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import PlayerMain from '../components/PlayerMain/PlayerMain';
import Sidelined from '../components/PlayerMain/Sidelined/Sidelined';
import Stats from '../components/PlayerMain/Stats/Stats';
import Transfers from '../components/PlayerMain/Transfers/Transfers';
import { clearPlayerDataActionCreator } from '../store/player/actions';

const PlayerScreens = (props) => {
  const { clearPlayerData, route } = props;
  const Stack = createStackNavigator();

  useEffect(() => {
    return () => {
      clearPlayerData();
    }
  }, [clearPlayerData])

  return (
    <Stack.Navigator initialRouteName='PlayerMain'>
      <Stack.Screen name='PlayerMain' component={PlayerMain} initialParams={route.params} />
      <Stack.Screen name='Stats' component={Stats} />
      <Stack.Screen name='Sidelined' component={Sidelined} />
      <Stack.Screen name='Transfers' component={Transfers} />
    </Stack.Navigator>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    clearPlayerData: () => { dispatch(clearPlayerDataActionCreator()) },
  }
}

export default connect(null, mapDispatchToProps)(PlayerScreens);
