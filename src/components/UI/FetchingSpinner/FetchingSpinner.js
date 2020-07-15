import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Spinner from 'react-native-spinkit';

const FetchingSpinner = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Spinner
        size={60}
        type={'ThreeBounce'}
        color={colors.primary} />
    </View>
  )
}

export default FetchingSpinner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
})
