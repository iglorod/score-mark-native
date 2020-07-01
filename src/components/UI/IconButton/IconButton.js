import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = (props) => {
  const { iconName, iconSize, color, onPress } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={color} />
    </TouchableOpacity>
  )
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    marginLeft: 20,
  }
})
