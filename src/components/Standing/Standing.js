/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';

const Standing = ({ navigation, route }) => {
  const [teamsData, setTeamsData] = useState([]);
  const [leagueData, setLeagueData] = useState({});

  const standing = route.params;
  const { colors } = useTheme();

  navigation.setOptions({
    headerStyle: {
      backgroundColor: 'red',
    }
  })

  useEffect(() => {
    moveTeamDataToTable(standing);
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
      <View style={[styles.container, { backgroundColor: colors.thirdBackground }]}>
        <View style={styles.header}>
          <View style={styles.tableTitle}>
            <Text style={styles.leagueName}>{leagueData.name}</Text>
            <Text style={styles.leagueDescription}>{leagueData.description}</Text>
          </View>
          <Icon name={'table'} color={'#fff'} size={35} />
        </View>
      </View>

      <View style={[styles.container, { backgroundColor: colors.secondaryBackground }]}>
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
    margin: 15,
    borderRadius: 5,
    fontFamily: 'OpenSans-Regular',
  },
  head: {
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 5,
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
    color: '#fff',
    fontSize: 22,
  },
  leagueDescription: {
    color: '#fff',
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
