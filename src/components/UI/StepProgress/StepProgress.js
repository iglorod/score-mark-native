import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StepProgress = (props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onBack}>
        <Icon
          style={styles.cancelIcon}
          name={'close-circle'}
          size={25}
          color={colors.text} />
      </TouchableOpacity>

      <View style={{ ...styles.progressBackground, backgroundColor: colors.secondaryBackgroundOpacity }}>
        <View style={{ ...styles.progress, backgroundColor: colors.secondaryBackground, width: props.progress }}></View>
      </View>

      <TouchableOpacity onPress={props.onNext}>
        <Icon
          name={'chevron-right-circle'}
          size={25}
          color={colors.text}
          style={{ ...styles.cancelIcon, opacity: props.nextButtonAvailible ? 1 : 0.6 }} />
      </TouchableOpacity>
    </View>
  )
}

export default StepProgress;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  progressBackground: {
    height: 10,
    width: '80%',
  },
  progress: {
    height: 10,
  }
})
