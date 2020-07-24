import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import EventLabel from './EventLabel/EventLabel';

const Event = (props) => {
  const { event } = props;

  return (
    <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
      <View style={styles.eventAuthor}>
        <Image source={{ uri: props.team.logo }} style={styles.logo} />

        <Text style={styles.elapsed}>
          {event.elapsed}{'\''}
          {event.elapsed_plus ? `+${event.elapsed_plus}` : null}
        </Text>

        <Text style={styles.player} onPress={props.onPress}>{event.player}</Text>
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
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
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
    color: '#fff',
    fontSize: 12,
    paddingRight: 10,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  player: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  }
})
