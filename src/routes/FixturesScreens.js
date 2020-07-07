import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Fixtures from '../components/Fixtures/Fixtures';
import IconButton from '../components/UI/IconButton/IconButton';
import { headerOptions } from '../utility/theme';
import FixtureScreens from './FixtureScreens';

const FixturesScreens = ({ navigation }) => {
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

  navigation.setOptions({ title: 'Fixtures List' });

  return (
    <Stack.Navigator
      initialRouteName='Fixtures'
      screenOptions={{ ...headerOptions, headerBackImage: backButtonImage }}
    >
      <Stack.Screen options={{ headerLeft: openDrawerButton }} name='Fixtures' component={Fixtures} />
      <Stack.Screen name='FixtureScreens' component={FixtureScreens} />
    </Stack.Navigator>
  )
}

export default FixturesScreens;
