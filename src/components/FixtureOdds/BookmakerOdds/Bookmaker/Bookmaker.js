import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { openUrlHandler } from '../../../../utility/url';

const Bookmaker = ({ bookmakerName }) => {
  return (
    <View style={styles.bookmaker}>
      <Text style={styles.bookmakerName}>{bookmakerName}</Text>
      <View style={styles.link}>
        <Text style={styles.bookmakerPage} onPress={openUrlHandler.bind(this, `https://${bookmakerName.split(' ').join('')}.com`)}>
          {'Visit site'}
        </Text>
        <Icon name={'open-in-new'} size={15} color={'#fff'} />
      </View>
    </View>
  )
}

export default Bookmaker;

const styles = StyleSheet.create({
  bookmaker: {
    display: 'flex',
    alignItems: 'center',
    width: 100,
  },
  bookmakerName: {
    color: '#fff',
    fontSize: 22,
  },
  bookmakerPage: {
    color: '#fff',
    marginTop: 5,
    paddingRight: 5,
  },
  offset: {
    height: '100%',
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  }
})
