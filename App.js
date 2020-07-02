import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import FixturesScreens from './src/routes/FixturesScreens';
import LeaguesScreens from './src/routes/LeaguesScreens';
import NewsScreens from './src/routes/NewsScreens';
import { MyTheme } from './src/utility/theme';

const App = () => {
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
    <NavigationContainer theme={MyTheme}>
      <SafeAreaView style={styles.mainContainer}>
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
            name='FixturesScreens'
            component={FixturesScreens}
            options={{
              drawerLabel: 'Fixtures',
              drawerIcon: config => <Icon name={'games'} size={config.size} color={config.color} />,
            }} />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
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

export default App;
