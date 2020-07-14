import React from 'react';
import { View, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';

const ModalSpinner = () => {

  return (
    <View style={styles.container}>
      <Spinner
        size={60}
        type={'Bounce'}
        color={'#fff'} />
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
  },
})
