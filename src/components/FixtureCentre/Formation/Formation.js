import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';

import Team from './Team/Team';

const Formation = ({ fixture }) => {
  const HomeTeamName = fixture.homeTeam.team_name;
  const { colors } = useTheme();

  const homePlayersStats = fixture.players.reduce((resultPlayers, player) => {
    if (player.team_name === HomeTeamName) {
      resultPlayers.push(player);
    }
    return resultPlayers;
  }, []);

  const AwayTeamName = fixture.awayTeam.team_name;
  const awayPlayersStats = fixture.players.reduce((resultPlayers, player) => {
    if (player.team_name === AwayTeamName) {
      resultPlayers.push(player);
    }
    return resultPlayers;
  }, []);

  return (
    <ImageBackground
      source={require('../../../assets/images/field.jpg')}
      style={[styles.field, {borderColor: colors.background}]}
    >
      <Team
        formation={fixture.lineups[HomeTeamName].formation}
        team={fixture.lineups[HomeTeamName].startXI}
        playersStats={homePlayersStats} />
      <Team
        formation={fixture.lineups[AwayTeamName].formation}
        team={fixture.lineups[AwayTeamName].startXI}
        playersStats={awayPlayersStats}
        away />
    </ImageBackground>
  )
}

const mapStateToProps = (state) => {
  return {
    fixture: state.fxt.fixture,
  }
}

export default connect(mapStateToProps)(Formation);

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    height: 371,
    width: '100%',
    borderWidth: 5,
  }
})
