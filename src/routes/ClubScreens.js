import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import ClubMain from '../components/ClubMain/ClubMain';
import WithComments from '../components/UI/WithComments/WithComments';
import ClubSquad from '../components/ClubSquad/ClubSquad';
import ClubStats from '../components/ClubStats/ClubStats';
import { openCommentsActionCreator, closeCommentsActionCreator } from '../store/comment/actions';
import { fetchClubActionCreator, clearClubDataActionCreator } from '../store/club/actions';

const ClubScreens = (props) => {
  const Stack = createStackNavigator();

  const { route } = props;

  useEffect(() => {
    //get club id from props.route.params.team_id
    props.fetchClub();

    return () => {
      props.clearClubData();
    }
  }, [props.fetchClub, props.clearClubData])

  useEffect(() => {
    if (!props.club) return;

    const clubId = route.params.team_id;
    props.openComments(`http://localhost:3000/club/${clubId}`, clubId.toString(), 'Club');

    return () => {
      props.closeComments();
    }
  }, [props.club, props.openComments, props.closeComments])

  return (
    <Stack.Navigator initialRouteName='ClubMain'>
      <Stack.Screen name='ClubMain' component={ClubMain} initialParams={route.params} />

      <Stack.Screen name='Squad'>
        {() => <WithComments showComments={!(props.players.length === 0)}><ClubSquad /></WithComments>}
      </Stack.Screen>
      <Stack.Screen name='Stats'>
        {() => <WithComments showComments={!!props.stats}><ClubStats /></WithComments>}
      </Stack.Screen>
    </Stack.Navigator>
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
