/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ClubSquad from '../components/ClubSquad/ClubSquad';
import ClubStats from '../components/ClubStats/ClubStats';
import WithComments from '../components/UI/WithComments/WithComments';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchClubActionCreator } from '../store/club/actions';
import { clearClubDataActionCreator } from '../store/club/actions';
import { openCommentsActionCreator, closeCommentsActionCreator } from '../store/comment/actions';

const ClubScreens = (props) => {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    //get club id from props.route.params.team_id
    props.fetchClub();

    return () => {
      props.clearClubData();
    }
  }, [props.fetchClub, props.clearClubData])

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
            iconName = 'view-list';
          } else if (route.name === 'Stats') {
            iconName = focused ? 'swap-horizontal-bold' : 'swap-horizontal';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Squad'>
        {() => <WithComments showComments={!(props.players.length === 0)}><ClubSquad /></WithComments>}
      </Tab.Screen>
      <Tab.Screen name='Stats'>
        {() => <WithComments showComments={!!props.stats}><ClubStats /></WithComments>}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

const mapStateToProps = (state) => {
  return {
    club: state.club.club,
    players: state.club.players,
    stats: state.club.stats,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClub: (id) => { dispatch(fetchClubActionCreator(id)) },
    clearClubData: () => { dispatch(clearClubDataActionCreator()) },
    openComments: (url, identifier, title) => { dispatch(openCommentsActionCreator(url, identifier, title)) },
    closeComments: () => { dispatch(closeCommentsActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubScreens);
