import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OpenLargeSkeleton = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.backgroundColor || '#fff' }]}>
      <View style={styles.header}>
        <Text style={styles.headerText} numberOfLines={1}>{props.headerText}</Text>
        <Icon name={props.headerIcon} size={25} color={'#fff'} />
      </View>

      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.textWithIcon}>
        <Icon name={props.subTitleIcon} size={20} color={'#fff'} />
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.textWithIcon}>
          <Icon name={props.bottomIcon} size={20} color={'#fff'} />
          <Text style={styles.bottomText}>{props.bottomText}</Text>
        </View>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.button}>OPEN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OpenLargeSkeleton;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 15,
    borderRadius: 5,
    fontFamily: 'OpenSans-Regular',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 34,
    fontFamily: 'OpenSans-Light',
    marginTop: 15,
    marginBottom: 10,
  },
  textWithIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subTitle: {
    color: '#fff',
    fontFamily: 'OpenSans-SemiBold',
    paddingLeft: 5,
  },
  bottomText: {
    color: '#fff',
    fontSize: 12,
    paddingLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
  },
  button: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'OpenSans-Bold',
    textTransform: 'uppercase',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#fff',
    borderRadius: 25,
  }
})
