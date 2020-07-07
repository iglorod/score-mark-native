import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Countries from '../components/Countries/Countries';
import Leagues from '../components/Leagues/Leagues';
import LeagueScreens from './LeagueScreens';
import IconButton from '../components/UI/IconButton/IconButton';
import { headerOptions } from '../utility/theme';
import FixturesScreens from './FixturesScreens';

const LeaguesScreens = ({ navigation }) => {
  const Stack = createStackNavigator();

  const openDrawerButton = () => (
    <IconButton
      iconName={'dehaze'}
      iconSize={25}
      color={'#fff'}
      onPress={navigation.openDrawer} />
  )

  const backButtonImage = () => (
    <Icon name={'keyboard-arrow-left'} size={30} color={'#fff'} />
  )

  return (
    <Stack.Navigator
      initialRouteName='Countries'
      screenOptions={{ ...headerOptions, headerBackImage: backButtonImage }}
    >
      <Stack.Screen options={{ headerLeft: openDrawerButton }} name='Countries' component={Countries} />
      <Stack.Screen name='Leagues' component={Leagues} />
      <Stack.Screen name='League' component={LeagueScreens} />
      <Stack.Screen name='FixturesScreens' component={FixturesScreens} />
    </Stack.Navigator>
  )
}

export default LeaguesScreens;
