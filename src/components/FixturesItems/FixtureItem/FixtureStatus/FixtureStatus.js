import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tips from 'react-native-tips'

const FixtureStatus = ({ fixture, onPress }) => {
  const [showTips, setShowTips] = useState(false);

  let scores = `${fixture.goalsHomeTeam} - ${fixture.goalsAwayTeam}`;
  if (fixture.statusShort === 'NS') {
    scores = '-- / --';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{moment(fixture.event_timestamp * 1000).format('DD.MM.YY')}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.scores}>{scores}</Text>
      </TouchableOpacity>
      <Tips
        visible={showTips}
        text={fixture.statusShort === 'FT' ? 'Match is over...' : 'Match expected...'}
        onRequestClose={setShowTips.bind(this, false)}
      >
        <Icon
          style={styles.status}
          name={'lens'}
          size={15}
          color={fixture.statusShort === 'FT' ? '#f36a6a' : '#3cf50e'}
          onPress={setShowTips.bind(this, true)} />
      </Tips>
    </View>
  )
}

export default FixtureStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
  },
  scores: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
  },
  status: {
    paddingVertical: 10,
  }
})
