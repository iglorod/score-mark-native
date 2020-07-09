import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const IconBanner = ({ iconName, text }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Icon name={iconName} size={70} color={colors.primary} />
      <Text style={{ ...styles.text, color: colors.primary }}>{text}</Text>
    </View>
  )
}

export default IconBanner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    fontFamily: 'OpenSans-Regular',
  }
})
