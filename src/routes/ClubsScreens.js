import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectLeague from '../components/SelectLeague/SelectLeague';
import Clubs from '../components/Clubs/Clubs';
import IconButton from '../components/UI/IconButton/IconButton';
import { headerOptions } from '../utility/theme';
import ClubScreens from './ClubScreens';

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

  const openClubs = (league) => {
    navigation.navigate('Clubs', { ...league, })
  }

  navigation.setOptions({ title: 'Clubs List' });

  return (
    <Stack.Navigator
      initialRouteName='Select League'
      screenOptions={{ ...headerOptions, headerBackImage: backButtonImage }}
    >
      <Stack.Screen options={{ headerLeft: openDrawerButton }} name='Select League'>
        {() => <SelectLeague onPress={openClubs} />}
      </Stack.Screen>
      <Stack.Screen name='Clubs' component={Clubs} />
      <Stack.Screen name='Club' component={ClubScreens} />
    </Stack.Navigator>
  )
}

export default FixturesScreens;
