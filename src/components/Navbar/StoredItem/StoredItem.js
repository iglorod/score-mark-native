import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StoredItem = (props) => {
  const { colors } = useTheme();

  let selectedStyles = {};
  if (props.selected) {
    selectedStyles = {
      borderWidth: 5,
      borderColor: colors.secondaryBackground,
    }
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, selectedStyles]}>
        {
          props.logo
            ? <Image style={styles.image} source={{ uri: props.logo }} />
            : <Icon name={'lock-question'} size={25} color={'#000'} />
        }
      </View>
    </TouchableOpacity>
  )
}

export default StoredItem;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  image: {
    height: 30,
    width: 30,
  }
})
