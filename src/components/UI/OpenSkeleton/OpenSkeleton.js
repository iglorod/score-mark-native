import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OpenSkeleton = (props) => {
  const { colors } = useTheme();

  let subTitle = null;
  if (props.subTitle) {
    subTitle = (
      <Text style={styles.withIcon} numberOfLines={2}>
        <Icon name={'information'} size={16} color={colors.secondaryBackground} />
        <Text style={[styles.subTitle, { color: colors.secondaryBackground }]}>{` ${props.subTitle}`}</Text>
      </Text>
    )
  }

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Image source={props.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={{ ...styles.text, color: colors.text }}>{props.title}</Text>

        {subTitle}

        <TouchableOpacity onPress={props.onPress}>
          <Text
            style={[
              styles.button,
              styles.button,
              { backgroundColor: colors.secondaryBackground }
            ]}
          >
            {props.buttonLabel || 'OPEN'}
          </Text>
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
    alignItems: 'center',
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
  },
  text: {
    fontSize: 24,
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'OpenSans-Bold',
    textTransform: 'uppercase',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  withIcon: {
    textAlign: 'center',
    marginTop: 10,
    width: '100%',
  },
  subTitle: {
    fontSize: 12,
  },
})
