/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import FixtureMain from '../components/FixtureMain/FixtureMain';
import FixtureStats from '../components/FixtureStats/FixtureStats';
import FixtureEvents from '../components/FixtureEvents/FixtureEvents';
import FixtureCentre from '../components/FixtureCentre/FixtureCentre';
import FixtureOdds from '../components/FixtureOdds/FixtureOdds';
import WithComments from '../components/UI/WithComments/WithComments';
import ModalSpinner from '../components/UI/ModalSpinner/ModalSpinner';
import { fetchFixturesActionCreator, clearFixtureActionCreator } from '../store/fixture/actions';
import { openCommentsActionCreator, closeCommentsActionCreator } from '../store/comment/actions';

const FixtureScreens = (props) => {
  const { route } = props;

  const Stack = createStackNavigator();
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

  if (props.loading) return <ModalSpinner />;

  // if (route.name === 'Stats') {
  //   iconName = focused ? 'swap-horizontal-bold' : 'swap-horizontal';
  // } else if (route.name === 'Centre') {
  //   iconName = 'chart-bubble';
  // } else if (route.name === 'Events') {
  //   iconName = focused ? 'microphone' : 'microphone-outline';
  // } else if (route.name === 'Odds') {
  //   iconName = 'chart-pie';

  return (
    <Stack.Navigator initialRouteName='FixtureMain'>
      <Stack.Screen name='FixtureMain' component={FixtureMain} initialParams={route.params} />

      <Stack.Screen name='Stats'>
        {() => <WithComments showComments><FixtureStats /></WithComments>}
      </Stack.Screen>
      <Stack.Screen name='Centre' component={FixtureCentre} />
      <Stack.Screen name='Events'>
        {() => <WithComments showComments><FixtureEvents /></WithComments>}
      </Stack.Screen>
      <Stack.Screen name='Odds' component={FixtureOdds} />
    </Stack.Navigator>
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
