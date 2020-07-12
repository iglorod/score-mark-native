/* eslint-disable react/display-name */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import LeaguesScreens from '../../routes/LeaguesScreens';
import NewsScreens from '../../routes/NewsScreens';
import ClubsScreens from '../../routes/ClubsScreens';

const Layout = () => {
  const Drawer = createDrawerNavigator();

  const CustomDrawer = props => {
    return (
      <View>
        <LinearGradient
          colors={['#32c391', '#188c87']}
          style={styles.linearGradient}
          start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
        >
          <Text style={styles.appName}>SCOREMARK</Text>
          <Text style={styles.appHymn}>Semper viverra nam libero</Text>
        </LinearGradient>
        <DrawerItemList {...props} />
      </View>
    );
  }

  return (
    <Drawer.Navigator initialRouteName='News' drawerContent={props => CustomDrawer(props)}>
      <Drawer.Screen
        name='News'
        component={NewsScreens}
        options={{
          drawerLabel: 'News',
          drawerIcon: config => <Icon name={'dashboard'} size={config.size} color={config.color} />,
        }} />
      <Drawer.Screen
        name='LeaguesScreens'
        component={LeaguesScreens}
        options={{
          drawerLabel: 'Leagues',
          drawerIcon: config => <Icon name={'grid-on'} size={config.size} color={config.color} />,
        }} />
      <Drawer.Screen
        name='ClubsScreens'
        component={ClubsScreens}
        options={{
          drawerLabel: 'Clubs',
          drawerIcon: config => <Icon name={'blur-circular'} size={config.size} color={config.color} />,
        }} />

    </Drawer.Navigator>
  );
};

export default Layout;

const styles = StyleSheet.create({
  linearGradient: {
    height: 100,
    width: '100%',
    marginBottom: 15,
    paddingLeft: 20,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 20,
    color: '#fff',
  },
  appHymn: {
    fontSize: 12,
    color: '#fff',
  },
});
