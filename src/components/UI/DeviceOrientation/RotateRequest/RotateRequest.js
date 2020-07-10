import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import OpacityAnimation from '../../OpacityAnimation/OpacityAnimation';

const RotateRequest = ({ icon }) => {
  const { colors } = useTheme();

  return (
    <OpacityAnimation style={styles.container}>
      <Icon name={icon} size={105} color={colors.primary} />
      <Text style={{ ...styles.subText, color: colors.primary }}>Please rotate your device</Text>
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
    fontSize: 25,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    marginTop: 25,
  }
})
