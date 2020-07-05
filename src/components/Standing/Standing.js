import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import { leagueStatnding } from '../../FakeData/FakeData';

const Standing = ({ route }) => {
  const [teamsData, setTeamsData] = useState([]);
  const [leagueData, setLeagueData] = useState({});

  useEffect(() => {
    leagueStatnding(route.params.id)
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

    const league = {
      name: data[0].group,
      description: data[0].description,
    }

    setLeagueData(league);
    setTeamsData(dataSource);
  }

  if (teamsData.length === 0) return <ModalSpinner />;

  const tableHead = ['Pos', 'Club', 'Pl', 'W', 'D', 'L', 'GD', 'Pts'];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableTitle}>
          <Text style={styles.leagueName}>{leagueData.name}</Text>
          <Text style={styles.leagueDescription}>{leagueData.description}</Text>
        </View>
        <Table>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={teamsData} textStyle={styles.text} />
        </Table>
      </View>
    </ScrollView>
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
  },
  tableTitle: {
    marginBottom: 15,
  },
  leagueName: {
    fontSize: 18,
  },
  leagueDescription: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.45)',
  }
})
