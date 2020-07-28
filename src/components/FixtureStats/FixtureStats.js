import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ClubColors from './ClubsColors/ClubsColors';
import ComparePercents from '../../components/UI/ComparePercents/ComparePercents';
import LinksToScreens from '../LinksToScreens/LinksToScreens';

const FixtureStats = ({ fixture }) => {
  return (
    <View style={styles.container}>
      <LinksToScreens
        values={[
          {
            name: 'Centre',
            path: 'Centre',
          },
          {
            name: 'Events',
            path: 'Events',
          },
          {
            name: 'Odds',
            path: 'Odds',
          }
        ]} />

      <ClubColors
        homeName={fixture.homeTeam.team_name}
        awayName={fixture.awayTeam.team_name} />
      {
        Object.entries(fixture.statistics).map(([title, stats], index) => (
          <ComparePercents
            key={index}
            title={title}
            first={stats.home}
            last={stats.away} />
        ))
      }
    </View>
  )
}

const mapStateToProps = state => {
  return {
    fixture: state.fxt.fixture,
  }
}

export default connect(mapStateToProps)(FixtureStats);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  }
})
