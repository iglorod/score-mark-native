import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ClubCentre from './ClubCentre/ClubCentre';
import FixtureScore from './FixtureScore/FixtureScore';

const FixtureSummary = ({ fixture }) => {
  const HomeTeamName = fixture.homeTeam.team_name;
  const AwayTeamName = fixture.awayTeam.team_name;

  return (
    <View style={styles.container}>
      <ClubCentre
        club={fixture.homeTeam}
        events={fixture.events}
        lineups={fixture.lineups[HomeTeamName]} />
      <FixtureScore
        statusShort={fixture.statusShort}
        homeGoals={fixture.goalsHomeTeam}
        awayGoals={fixture.goalsAwayTeam} />
      <ClubCentre
        club={fixture.awayTeam}
        events={fixture.events}
        lineups={fixture.lineups[AwayTeamName]}
        away />
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    fixture: state.fxt.fixture,
  }
}

export default connect(mapStateToProps)(FixtureSummary);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
  }
})
