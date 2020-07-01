import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FixturesScreens from './src/routes/FixturesScreens';
import LeaguesScreens from './src/routes/LeaguesScreens';
import NewsScreens from './src/routes/NewsScreens';
import { MyTheme } from './src/utility/theme';
import DrawerItemTitle from './src/components/UI/DrawerItemTitle/DrawerItemTitle';

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaView style={styles.mainContainer}>
        <Drawer.Navigator initialRouteName='News'>
          <Drawer.Screen
            name='News'
            component={NewsScreens}
            options={{ title: (props) => <DrawerItemTitle {...props} text={'News'} icon={'dashboard'} /> }} />
          <Drawer.Screen
            name='LeaguesScreens'
            component={LeaguesScreens}
            options={{ title: (props) => <DrawerItemTitle {...props} text={'Leagues'} icon={'grid-on'} /> }} />
          <Drawer.Screen
            name='FixturesScreens'
            component={FixturesScreens}
            options={{ title: (props) => <DrawerItemTitle {...props} text={'Fixtures'} icon={'games'} /> }} />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});

export default App;
