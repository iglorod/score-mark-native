import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';

import OpenLargeSkeleton from '../UI/OpenLargeSkeleton/OpenLargeSkeleton';
import { fetchPlayerStatsBySeasonActionCreator } from '../../store/player/actions';
import { fetchClubStatsActionCreator, fetchClubSquadActionCreator } from '../../store/club/actions';

const PlayerMain = (props) => {
  const { colors } = useTheme();
  const { navigation, route } = props;
  const id = route.params.player_id;

  useEffect(() => {
    props.fetchPlayerStats(new Date().getFullYear());
  }, [props.fetchPlayerStats])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{route.params.player_name}, {route.params.position}</Text>

        <OpenLargeSkeleton
          headerText={route.params.name}
          headerIcon={'table'}
          title={'Player Statistics'}
          subTitle={'Statistics splitted by seasons'}
          subTitleIcon={'cards-club'}
          bottomText={new Date().toLocaleDateString()}
          bottomIcon={'update'}
          backgroundColor={colors.secondaryBackground}
          onPress={navigation.navigate.bind(this, 'Stats', { id })} />
        <OpenLargeSkeleton
          headerText={route.params.name}
          headerIcon={'plus-circle'}
          title={'Player Sidelines'}
          subTitle={'List of player injuries'}
          subTitleIcon={'thermostat'}
          bottomText={new Date().toLocaleDateString()}
          bottomIcon={'update'}
          backgroundColor={colors.thirdBackground}
          onPress={navigation.navigate.bind(this, 'Sidelined', { id })} />
        <OpenLargeSkeleton
          headerText={route.params.name}
          headerIcon={'swap-horizontal'}
          title={'Player Transfers'}
          subTitle={'List of player transfers'}
          subTitleIcon={'thermostat'}
          bottomText={new Date().toLocaleDateString()}
          bottomIcon={'update'}
          backgroundColor={colors.secondaryBackground}
          onPress={navigation.navigate.bind(this, 'Transfers', { id })} />
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.club.loading,
    players: state.club.players,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchClubStats: (clubId) => { dispatch(fetchClubStatsActionCreator(clubId)) },
    fetchClubSquad: (clubId) => { dispatch(fetchClubSquadActionCreator(clubId)) },
    fetchPlayerStats: (season) => { dispatch(fetchPlayerStatsBySeasonActionCreator(season)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerMain);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginLeft: 20,
  }
})
