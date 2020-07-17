/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import LeaguesScreens from '../../routes/LeaguesScreens';
import NewsScreens from '../../routes/NewsScreens';
import ClubsScreens from '../../routes/ClubsScreens';
import PlayersItems from '../PlayersItems/PlayersItems';
import ClubFixtures from '../ClubFixtures/ClubFixtures';
import LeagueFixtures from '../LeagueFixtures/LeagueFixtures';
import TodayFixtures from '../TodayFixtures/TodayFixtures';

const Layout = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ header: Navbar }}>
      <Stack.Screen name='Main' component={Main} />
      <Stack.Screen name='News' component={NewsScreens} />
      <Stack.Screen name='Players' component={PlayersItems} />
      <Stack.Screen name='ClubFixtures' component={ClubFixtures} />
      <Stack.Screen name='LeagueFixtures' component={LeagueFixtures} />
      <Stack.Screen name='TodayFixtures' component={TodayFixtures} />
      <Stack.Screen name='LeaguesScreens' component={LeaguesScreens} />
      <Stack.Screen name='ClubsScreens' component={ClubsScreens} />
    </Stack.Navigator>
  );
};

export default Layout;
