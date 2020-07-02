import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Title = () => {
  return (
    <LinearGradient
      colors={['#32c391', '#188c87']}
      style={styles.linearGradient}
    >
      <Text style={styles.title}>FOOTBALL LEAGUES</Text>
      <Text style={styles.subTitle}>Consectetur libero id faucibus nisl tincidunt</Text>
    </LinearGradient>
  )
}

export default Title;

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
  title: {
    color: '#fff',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
  subTitle: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
})
