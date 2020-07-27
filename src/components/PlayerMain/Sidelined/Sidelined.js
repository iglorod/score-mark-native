import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

import FetchingSpinner from '../../UI/FetchingSpinner/FetchingSpinner';
import { fetchPlayerSidelinesActionCreator } from '../../../store/player/actions';

const Sidelined = (props) => {
  const { colors } = useTheme();
  const { stats, sidelined, fetchPlayerSidelines } = props;

  useEffect(() => {
    if (stats.length === 0) return;

    const playerId = stats[0].player_id;
    fetchPlayerSidelines(playerId)
  }, [stats, fetchPlayerSidelines])

  if (sidelined.length === 0 || stats.length === 0) return <FetchingSpinner color={'#fff'} />;

  return (
    <ScrollView>
      <Text style={styles.title}>Sidelines, {stats[0].player_name}</Text>
      <View style={styles.sidelined}>
        {
          sidelined.map((sideline, index) => (
            <View key={index} style={[
              styles.sideline,
              {
                backgroundColor: index % 2
                  ? colors.secondaryBackground
                  : colors.thirdBackground
              }
            ]}>
              <Icon name={'close-box'} size={20} color={'#fff'} />
              <View style={styles.date}>
                <Text>{sideline.start}</Text>
                <Text> - </Text>
                <Text>{sideline.end}</Text>
              </View>
              <Text style={styles.illness}>{sideline.type}</Text>
            </View>
          ))
        }
      </View>
    </ScrollView >
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.plr.stats,
    sidelined: state.plr.sidelined,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayerSidelines: () => { dispatch(fetchPlayerSidelinesActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidelined);

const styles = StyleSheet.create({
  sidelined: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  sideline: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
    width: '90%',
    overflow: 'hidden',
  },
  illness: {
    color: '#e8e8e8',
  },
  date: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: '10%',
  }
})
