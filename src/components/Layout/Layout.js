/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import NewsScreens from '../../routes/NewsScreens';
import ClubsScreens from '../../routes/ClubsScreens';
import PlayersItems from '../PlayersItems/PlayersItems';
import ClubFixtures from '../ClubFixtures/ClubFixtures';
import TodayFixtures from '../TodayFixtures/TodayFixtures';
import LeagueFixtures from '../LeagueFixtures/LeagueFixtures';
import LeagueScreens from '../../routes/LeagueScreens';

const Layout = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ header: (props) => <Navbar {...props} /> }}>
      <Stack.Screen name='Main' component={Main} />
      <Stack.Screen name='News' component={NewsScreens} />
      <Stack.Screen name='Players' component={PlayersItems} />
      <Stack.Screen name='ClubFixtures' component={ClubFixtures} />
      <Stack.Screen name='LeagueFixtures' component={LeagueFixtures} />
      <Stack.Screen name='TodayFixtures' component={TodayFixtures} />
      <Stack.Screen name='LeagueScreens' component={LeagueScreens} />
      <Stack.Screen name='ClubsScreens' component={ClubsScreens} />
    </Stack.Navigator>
  );
};

export default Layout;
