import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import OpenLargeSkeleton from '../UI/OpenLargeSkeleton/OpenLargeSkeleton';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import { setLastClubActionCreator } from '../../store/navbar/actions';
import { fetchClubStatsActionCreator, fetchClubSquadActionCreator } from '../../store/club/actions';

const ClubMain = (props) => {
  const { colors } = useTheme();
  const { navigation } = props;
  const club = props.club || {};

  const clubId = club.team_id;

  useEffect(() => {
    if (!clubId) return;

    props.fetchClubSquad(clubId);

    AsyncStorage.setItem('LAST_CLUB', JSON.stringify(club))
    props.setLastClub(club);
  }, [club, props.setLastClub, props.fetchClubSquad])

  if (props.loading) return <ModalSpinner />;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{club.name}, {club.country}</Text>

        <OpenLargeSkeleton
          headerText={club.name}
          headerIcon={'view-list'}
          title={'Club Squad'}
          subTitle={`${props.players.length} players`}
          subTitleIcon={'cards-club'}
          bottomText={new Date().toLocaleDateString()}
          bottomIcon={'update'}
          backgroundColor={colors.secondaryBackground}
          onPress={navigation.navigate.bind(this, 'Squad')} />
        <OpenLargeSkeleton
          headerText={club.name}
          headerIcon={'swap-horizontal-bold'}
          title={'Club Statistics'}
          subTitle={'Info from all matches is used'}
          subTitleIcon={'thermostat'}
          bottomText={new Date().toLocaleDateString()}
          bottomIcon={'update'}
          backgroundColor={colors.thirdBackground}
          onPress={navigation.navigate.bind(this, 'Stats', { clubId })} />
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => {
  return {
    club: state.club.club,
    loading: state.club.loading,
    players: state.club.players,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLastClub: (club) => { dispatch(setLastClubActionCreator(club)) },
    fetchClubStats: (clubId) => { dispatch(fetchClubStatsActionCreator(clubId)) },
    fetchClubSquad: (clubId) => { dispatch(fetchClubSquadActionCreator(clubId)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubMain);

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
