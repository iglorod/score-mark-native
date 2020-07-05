import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Round = ({ round, current, onPress }) => {
  const { colors } = useTheme();

  const maskStyle = {
    ...styles.backgroundMask,
    backgroundColor: colors.primary,
    opacity: current ? 1 : 0.7,
  }

  return (
    <TouchableOpacity style={styles.round} onPress={onPress}>
      <Text style={styles.roundValue}>{round.split('_-_')[1]}</Text>
      <View style={maskStyle}></View>
    </TouchableOpacity>
  )
}

export default React.memo(Round);

const styles = StyleSheet.create({
  round: {
    fontSize: 16,
    marginBottom: 10,
    position: 'relative',
  },
  roundValue: {
    color: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  backgroundMask: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
    borderRadius: 15,
  }
})
