import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientTitle = (props) => {
  return (
    <LinearGradient
      colors={['#32c391', '#188c87']}
      style={styles.linearGradient}
    >
      {props.children}
    </LinearGradient>
  )
}

export default LinearGradientTitle;

const styles = StyleSheet.create({
  linearGradient: {
    height: 150,
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
