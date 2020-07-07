import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import EventLabel from './EventLabel/EventLabel';

const Event = ({ event, team, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.eventAuthor}>
        <Image source={{ uri: team.logo }} style={styles.logo} />

        <Text style={styles.elapsed}>
          {event.elapsed}{'\''}
          {event.elapsed_plus ? `+${event.elapsed_plus}` : null}
        </Text>

        <Text onPress={onPress}>{event.player}</Text>
      </View>
      <EventLabel type={event.type} detail={event.detail} />
    </View>
  )
}

export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    paddingBottom: 10,
  },
  logo: {
    height: 25,
    width: 25,
  },
  eventAuthor: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
  },
  elapsed: {
    fontSize: 12,
    paddingRight: 10,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  player: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
  }
})
