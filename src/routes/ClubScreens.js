/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ClubSquad from '../components/ClubSquad/ClubSquad';
import ClubStats from '../components/ClubStats/ClubStats';
import WithComments from '../components/UI/WithComments/WithComments';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchClubActionCreator } from '../store/club/actions';
import { fetchClubStatsActionCreator, clearClubDataActionCreator } from '../store/club/actions';
import { openCommentsActionCreator, closeCommentsActionCreator } from '../store/comment/actions';

const ClubScreens = (props) => {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    //get club id from props.history

    props.fetchClub();
  }, [props.fetchClub])

  useEffect(() => {
    props.fetchClubStats();

    return () => {
      props.clearClubData();
    }
  }, [props.fetchClubStats, props.clearClubData])

  useEffect(() => {
    if (!props.club) return;

    const clubId = props.club.team_id;
    props.openComments(`http://localhost:3000/club/${clubId}`, clubId.toString(), 'Club');

    return () => {
      props.closeComments();
    }
  }, [props.club, props.openComments, props.closeComments])

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Squad') {
            iconName = focused ? 'view-list' : 'view-list-outline';
          } else if (route.name === 'Stats') {
            iconName = focused ? 'swap-horizontal' : 'swap-horizontal-bold';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Squad'>
        {() => <WithComments><ClubSquad /></WithComments>}
      </Tab.Screen>
      <Tab.Screen name='Stats'>
        {() => <WithComments><ClubStats /></WithComments>}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

const mapStateToProps = (state) => {
  return {
    club: state.club.club,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClubStats: () => { dispatch(fetchClubStatsActionCreator()) },
    clearClubData: () => { dispatch(clearClubDataActionCreator()) },
    openComments: (url, identifier, title) => { dispatch(openCommentsActionCreator(url, identifier, title)) },
    closeComments: () => { dispatch(closeCommentsActionCreator()) },
    fetchClub: (id) => { dispatch(fetchClubActionCreator(id)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubScreens);
