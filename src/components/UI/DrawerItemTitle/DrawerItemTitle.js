import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerItemTitle = (props) => {
  const { icon, color, text } = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={15} color={color} />
      </View>
      <View>
        <Text style={{ color: color }}>{text}</Text>
      </View>
    </View>
  )
}

export default DrawerItemTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  }
})
