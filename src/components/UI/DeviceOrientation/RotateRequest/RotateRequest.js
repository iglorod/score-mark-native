import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OpacityAnimation from '../../OpacityAnimation/OpacityAnimation';

const RotateRequest = ({ icon }) => {
  return (
    <OpacityAnimation style={styles.container}>
      <Icon name={icon} size={105} color={'#fff'} />
      <Text style={styles.subText}>Please rotate your device</Text>
    </OpacityAnimation>
  )
}

export default RotateRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    marginTop: 25,
  }
})
