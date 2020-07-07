import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import ClubColors from './ClubsColors/ClubsColors';
import ComparePercents from '../../components/UI/ComparePercents/ComparePercents';

const FixtureStats = ({ fixture }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
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
    </ScrollView>
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
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
  }
})
