import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

const OpenSkeleton = (props) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Image source={props.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={{ ...styles.text, color: colors.text }}>{props.title}</Text>

        <TouchableOpacity onPress={props.onPress}>
          <View style={{ ...styles.button, backgroundColor: colors.background }}>
            <Text style={styles.buttonText}>{props.buttonLabel || 'OPEN'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OpenSkeleton;

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
  },
  image: {
    height: 120,
    width: 120,
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
  },
  text: {
    fontSize: 24,
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    paddingVertical: 5,
    paddingHorizontal: 15,
  }
})
