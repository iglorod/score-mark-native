import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Avatar = (props) => {
  const { colors } = useTheme();

  const avatarSize = {
    height: props.size || 40,
    width: props.size || 40,
  }

  let selectedStyle = {};
  if (props.selected) {
    selectedStyle = {
      borderWidth: 5,
      borderColor: colors.secondaryBackground,
    }
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.container, ...avatarSize, ...selectedStyle, ...props.style }}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}

export default Avatar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    overflow: 'hidden',
  }
})
