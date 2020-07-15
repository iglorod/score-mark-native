import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{...styles.container, ...props.style}}>
      {props.children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
  }
})
