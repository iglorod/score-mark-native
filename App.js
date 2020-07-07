import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyTheme } from './src/utility/theme';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import clubReducer from './src/store/club/reducer';
import fixtureReducer from './src/store/fixture/reducer';
import playerReducer from './src/store/player/reducer';
import Layout from './src/components/Layout/Layout';

const App = () => {
  const store = createStore(combineReducers({
    club: clubReducer,
    fxt: fixtureReducer,
    plr: playerReducer,
  }), applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <SafeAreaView style={styles.mainContainer}>
          <Layout />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
