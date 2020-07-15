import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

const LabelAvatar = (props) => {
  const { colors } = useTheme();
  const { picture, text } = props;

  const avatarSize = {
    height: props.size || 70,
    width: props.size || 70,
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          style={
            props.selected
              ? { ...styles.image, ...styles.selectedImage, borderColor: colors.secondaryBackground, ...avatarSize }
              : { ...styles.image, ...avatarSize }
          }
          source={picture} />

        <Text style={{ ...styles.text, color: props.selected ? colors.secondaryText : colors.text }}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default LabelAvatar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    borderRadius: 50,
  },
  selectedImage: {
    borderWidth: 5,
  },
  text: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    marginTop: 5,
  }
})
