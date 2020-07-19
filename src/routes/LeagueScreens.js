/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LeagueMain from '../components/LeagueMain/LeagueMain';
import Standing from '../components/Standing/Standing';
import TopScorers from '../components/TopScorers/TopScorers';
import LeagueRounds from '../components/LeagueRounds/LeagueRounds';

const LeagueScreens = ({ route }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='LeagueMain'>
      <Stack.Screen name='LeagueMain' component={LeagueMain} initialParams={route.params} />
      <Stack.Screen name='Standing' component={Standing} />
      <Stack.Screen name='Top Scorers' component={TopScorers} />
      <Stack.Screen name='Rounds' component={LeagueRounds} />
    </Stack.Navigator>
  )
}

export default LeagueScreens;
