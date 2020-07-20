import React from 'react';
import { SafeAreaView, StyleSheet, Linking, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { MyTheme } from './src/utility/theme';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import clubReducer from './src/store/club/reducer';
import fixtureReducer from './src/store/fixture/reducer';
import playerReducer from './src/store/player/reducer';
import commentReducer from './src/store/comment/reducer';
import navbarReducer from './src/store/navbar/reducer';
import Layout from './src/components/Layout/Layout';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  const store = createStore(combineReducers({
    club: clubReducer,
    fxt: fixtureReducer,
    plr: playerReducer,
    cmnt: commentReducer,
    nvb: navbarReducer,
  }), applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={MyTheme}
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
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
