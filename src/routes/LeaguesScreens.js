import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Leagues from '../components/Leagues/Leagues';
import League from '../components/League/League';
import IconButton from '../components/UI/IconButton/IconButton';
import { headerOptions } from '../utility/theme';

const LeaguesScreens = ({ navigation }) => {
  const Stack = createStackNavigator();

  const openDrawerButton = () => (
    <IconButton
      iconName={'dehaze'}
      iconSize={25}
      color={'#fff'}
      onPress={navigation.openDrawer} />
  )

  return (
    <Stack.Navigator
      initialRouteName='Leagues'
      screenOptions={headerOptions}
    >
      <Stack.Screen options={{ headerLeft: openDrawerButton }} name='Leagues' component={Leagues} />
      <Stack.Screen name='League' component={League} />
    </Stack.Navigator>
  )
}

export default LeaguesScreens;
