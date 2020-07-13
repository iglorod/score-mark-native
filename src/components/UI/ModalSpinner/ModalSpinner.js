import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';

const ModalSpinner = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Spinner
        size={60}
        type={'Bounce'}
        color={colors.primary} />
    </View>
  )
}

export default ModalSpinner;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
})
