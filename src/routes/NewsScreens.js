import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import News from '../components/News/News';
import IconButton from '../components/UI/IconButton/IconButton';
import { headerOptions } from '../utility/theme';

const NewsScreens = ({ navigation }) => {
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
      initialRouteName='News'
      screenOptions={{ ...headerOptions, headerBackImage: backButtonImage }}
    >
      <Stack.Screen options={{ headerLeft: openDrawerButton }} name='News' component={News} />
    </Stack.Navigator>
  )
}

export default NewsScreens;
