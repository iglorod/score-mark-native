/* eslint-disable react/display-name */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Standing from '../components/Standing/Standing';
import TopScorers from '../components/TopScorers/TopScorers';
import LeagueRounds from '../components/LeagueRounds/LeagueRounds';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LeagueScreens = ({ navigation, route }) => {
  const Tab = createBottomTabNavigator();

  navigation.setOptions({ title: `${route.params.name}` });

  const params = { id: route.params.league_id };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Standing') {
            iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
          } else if (route.name === 'Top Scorers') {
            iconName = focused ? 'chart-donut-variant' : 'chart-donut';
          } else if (route.name === 'Rounds') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Standing' component={Standing} initialParams={params} />
      <Tab.Screen name='Top Scorers' component={TopScorers} initialParams={params} />
      <Tab.Screen name='Rounds' component={LeagueRounds} initialParams={params} />
    </Tab.Navigator>
  )
}

export default LeagueScreens;
