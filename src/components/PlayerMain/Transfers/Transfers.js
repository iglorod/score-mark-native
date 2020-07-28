import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Table, Row, Rows } from 'react-native-table-component';
import { useTheme } from '@react-navigation/native';

import LinksToScreens from '../../LinksToScreens/LinksToScreens';
import ModalSpinner from '../../UI/ModalSpinner/ModalSpinner';
import TransferClubs from './TransferClubs/TransferClubs';
import { fetchPlayerTransfersActionCreator } from '../../../store/player/actions';

const Transfers = (props) => {
  const [playerTransfers, setPlayerTransfers] = useState([]);

  const { colors } = useTheme();
  const { stats, fetchPlayerTransfers } = props;

  useEffect(() => {
    if (stats.length === 0) return;

    const playerId = stats[0].player_id;
    fetchPlayerTransfers(playerId);
  }, [stats, fetchPlayerTransfers])

  useEffect(() => {
    if (props.transfers.length === 0) return;

    moveTeamDataToTable(props.transfers);
  }, [props.transfers])

  const moveTeamDataToTable = (data) => {
    let dataSource = [];

    dataSource = data.map((transfer, index) => ([
      transfer.transfer_date,
      transfer.type,
      <TransferClubs key={index} from={transfer.team_out} to={transfer.team_in} />,
      transfer.player_name,
    ]))

    setPlayerTransfers(dataSource);
  }

  if (playerTransfers.length === 0) return <ModalSpinner />;

  const tableHead = ['Date', 'Type', 'Transfer', 'Player'];

  return (
    <ScrollView>
      <LinksToScreens
        values={[
          {
            name: 'Statistics',
            path: 'Stats',
          },
          {
            name: 'Sidelines',
            path: 'Sidelined',
          }
        ]} />

      <Text style={styles.title}>Transfers, {stats[0].player_name}</Text>
      <View style={[styles.container, { backgroundColor: colors.secondaryBackground }]}>
        <Table>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={playerTransfers} textStyle={styles.text} />
        </Table>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.plr.stats,
    transfers: state.plr.transfers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayerTransfers: (playerId) => { dispatch(fetchPlayerTransfersActionCreator(playerId)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);

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
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
  },
  text: {
    margin: 6,
    marginTop: 20,
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: '10%',
  }
})
