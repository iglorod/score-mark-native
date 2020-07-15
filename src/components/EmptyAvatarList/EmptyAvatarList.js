import React from 'react';
import { View } from 'react-native';
import Avatar from '../UI/Avatar/Avatar';

const EmptyAvatarList = ({ count, direction = 'row' }) => {
  if (count < 1) count = 1;

  const avatarArr = [];
  for (let i = 0; i < count; i++) {
    avatarArr.push(<Avatar key={i} size={60} />)
  }

  return (
    <View style={{ flexDirection: direction }}>
      {avatarArr}
    </View>
  )
}

export default EmptyAvatarList;
