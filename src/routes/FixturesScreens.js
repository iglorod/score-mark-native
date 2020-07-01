import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Fixtures from '../components/Fixtures/Fixtures';
import Fixture from '../components/Fixture/Fixture';
import IconButton from '../components/UI/IconButton/IconButton';
import { headerOptions } from '../utility/theme';

const FixturesScreens = ({ navigation }) => {
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
      initialRouteName='Fixtures'
      screenOptions={{...headerOptions}}
    >
      <Stack.Screen options={{ headerLeft: openDrawerButton }} name='Fixtures' component={Fixtures} />
      <Stack.Screen name='Fixture' component={Fixture} />
    </Stack.Navigator>
  )
}

export default FixturesScreens;
