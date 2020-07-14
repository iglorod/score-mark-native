/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import LeaguesScreens from '../../routes/LeaguesScreens';
import NewsScreens from '../../routes/NewsScreens';
import ClubsScreens from '../../routes/ClubsScreens';

const Layout = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ header: Navbar }}>
      <Stack.Screen name='Main' component={Main} />
      <Stack.Screen name='News' component={NewsScreens} />
      <Stack.Screen name='LeaguesScreens' component={LeaguesScreens} />
      <Stack.Screen name='ClubsScreens' component={ClubsScreens} />
    </Stack.Navigator>
  );
};

export default Layout;
