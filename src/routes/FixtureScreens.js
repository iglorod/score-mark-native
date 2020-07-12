/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';

import FixtureStats from '../components/FixtureStats/FixtureStats';
import FixtureEvents from '../components/FixtureEvents/FixtureEvents';
import FixtureCentre from '../components/FixtureCentre/FixtureCentre';
import FixtureOdds from '../components/FixtureOdds/FixtureOdds';
import WithComments from '../components/UI/WithComments/WithComments';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalSpinner from '../components/UI/ModalSpinner/ModalSpinner';
import { fetchFixturesActionCreator, clearFixtureActionCreator } from '../store/fixture/actions';
import { openCommentsActionCreator, closeCommentsActionCreator } from '../store/comment/actions';

const FixtureScreens = (props) => {
  const { route } = props;

  const Tab = createBottomTabNavigator();
  const fixtureId = route.params.id;

  useEffect(() => {
    props.fetchFixture(fixtureId);

    return () => {
      props.clearFixture();
    }
  }, [props.fetchFixtures, props.clearFixture])

  useEffect(() => {
    if (!props.fixture) return;

    const fixtureId = props.fixture.fixture_id;
    props.openComments(`http://localhost:3000/fixture/${fixtureId}`, fixtureId.toString(), 'Fixture');

    return () => {
      props.closeComments();
    }
  }, [props.fixture, props.openComments, props.closeComments])

  // if (props.loading) {
  //   navigation.setOptions({ title: 'Fixture Summary' });
  //   return <ModalSpinner />;
  // } else {
  //   navigation.setOptions({
  //     title: (
  //       <View style={styles.titleContainer}>
  //         <Image style={styles.image} sourse={{ uri: props.fixture.homeTeam.logo }} />
  //         <Text style={styles.text}> - </Text>
  //         <Image style={styles.image} sourse={{ uri: props.fixture.awayTeam.logo }} />
  //       </View>
  //     )
  //   });
  // }

  if (props.loading) return <ModalSpinner />;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Stats') {
            iconName = focused ? 'swap-horizontal-bold' : 'swap-horizontal';
          } else if (route.name === 'Centre') {
            iconName = 'chart-bubble';
          } else if (route.name === 'Events') {
            iconName = focused ? 'microphone' : 'microphone-outline';
          } else if (route.name === 'Odds') {
            iconName = 'chart-pie';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Stats'>
        {() => <WithComments><FixtureStats /></WithComments>}
      </Tab.Screen>
      <Tab.Screen name='Centre'>
        {() => <WithComments><FixtureCentre /></WithComments>}
      </Tab.Screen>
      <Tab.Screen name='Events'>
        {() => <WithComments><FixtureEvents /></WithComments>}
      </Tab.Screen>
      <Tab.Screen name='Odds' component={FixtureOdds} />
    </Tab.Navigator>
  )
}

const mapStateToProps = state => {
  return {
    fixture: state.fxt.fixture,
    loading: state.fxt.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFixture: (id) => { dispatch(fetchFixturesActionCreator(id)) },
    clearFixture: () => { dispatch(clearFixtureActionCreator()) },
    openComments: (url, identifier, title) => { dispatch(openCommentsActionCreator(url, identifier, title)) },
    closeComments: () => { dispatch(closeCommentsActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FixtureScreens);

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
})
