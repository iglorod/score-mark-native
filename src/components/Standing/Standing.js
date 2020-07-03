import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import { leagueStatnding } from '../../FakeData/FakeData';

const Standing = () => {
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    leagueStatnding()
      .then(response => response.api.results.standings)
      .then(data => moveTeamDataToTable(data))
      .catch(error => console.log(error))
  }, [])

  const moveTeamDataToTable = (data) => {
    let dataSource = [];

    dataSource = data.map((team, index) => ([
      team.rank,
      <Image key={index} style={styles.clubLogo} source={{ uri: team.logo }} />,
      team.all.matchsPlayed,
      team.all.win,
      team.all.draw,
      team.all.lose,
      team.goalsDiff,
      team.points,
    ]))

    setTeamsData(dataSource);
  }

  if (teamsData.length === 0) return <ModalSpinner />;

  const tableHead = ['Pos', 'Club', 'Pl', 'W', 'D', 'L', 'GD', 'Pts'];

  return (
    <View style={styles.container}>
      <Table>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={teamsData} textStyle={styles.text} />
      </Table>
    </View>
  )
}

export default Standing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: '#fafafa',
  },
  text: {
    margin: 6,
    marginTop: 20,
    textAlign: 'center',
  },
  clubLogo: {
    height: 30,
    width: 30,
    marginLeft: 10,
  }
})
