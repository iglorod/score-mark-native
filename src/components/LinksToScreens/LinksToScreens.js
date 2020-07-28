import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, useNavigation } from '@react-navigation/native';

const LinksToScreens = ({ values }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {
        values.map((value, index) => (
          <TouchableOpacity key={index} onPress={navigation.navigate.bind(this, value.path, value.params)}>
            <View style={[
              styles.item,
              {
                backgroundColor: index % 2
                  ? colors.secondaryBackground
                  : colors.thirdBackground
              }
            ]}>
              <Icon name={'open-in-app'} size={20} color={'#fff'} />
              <Text style={styles.text}>{value.name}</Text>
            </View>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

export default LinksToScreens;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    marginBottom: 20,
    fontFamily: 'OpenSans-Regular',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    paddingLeft: 5,
  }
})
